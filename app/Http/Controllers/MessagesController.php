<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Message;

class MessagesController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    public function getUserMessages() {
        $userMessages = Message::where('receiver_id', Auth::id())->get();
        
        return response()->json($userMessages);
    }

    public function saveMessage(Request $request) {
        $senderId = Auth::id();
        $receiverId = $request->user;
        $requestMessage = $request->message;

        if ($receiverId <= 0 && $requestMessage == "") {
            $error = "Rellene los campos para enviar el mensaje";
            return response()->json($error, 202);
        }
        elseif($receiverId <= 0) {
            $error = "Seleccione a un amigo";
            return response()->json($error, 202);            
        }
        elseif($requestMessage == "") {
            $error = "Escribe un mensaje para enviar";
            return response()->json($error, 202);
        }
        else {
            $message = new Message();
            $message->sender_id = $senderId;
            $message->receiver_id = $receiverId;
            $message->message = $requestMessage;
            $message->save();

            return response()->json("Mensaje enviado", 200);
        }
    }

    public function deleteMessage(Request $request) {
        $messageId = $request->id;
        $message = Message::where('id', $messageId)->delete();
    }
}
