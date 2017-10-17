<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\User;
use App\UserFriend;

class HomeController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    public function index() {
        return view('home');
    }

    public function getUserInfo() {
        $user = Auth::user();
        return response()->json($user);
    }

    public function getUsers() {
        $userFriends = UserFriend::all();

        if ($userFriends->isEmpty()) {
            $users = User::where('id', '!=', Auth::id())->get();
            return response()->json($users);
        } 
        else {
            $userFriends = UserFriend::where('user_id', Auth::id())->get();
            
            $friends = [];
            for ($i = 0; $i < count($userFriends); $i++) { 
                array_push($friends, $userFriends[$i]->friend_id);
            }
            
            $users = DB::table('users')
                ->where('id', '!=',  Auth::id())
                ->whereNotIn('id', $friends)
                ->get();
    
            return response()->json($users);   
        }
    }

    public function saveFriend(Request $request) {
        $friendId = $request->id;
        
        $userFriend = new UserFriend();
        $userFriend->user_id = Auth::id();
        $userFriend->friend_id = $friendId;
        $userFriend->save();
    }

    public function deleteFriend(Request $request) {
        $authUserId = Auth::id();
        $friendId = $request->friendId;
        $friendToDelete = [
            'user_id' => $authUserId,
            'friend_id' => $friendId
        ];

        $friend = UserFriend::where($friendToDelete)->delete();
    }

    public function getUserFriends() {
        $authUserId = Auth::id();
        $userFriendsId = UserFriend::where('user_id', $authUserId)->get();
        
        $friends = [];
        for ($i = 0; $i < count($userFriendsId); $i++) { 
            array_push($friends, $userFriendsId[$i]->friend_id);
        }

        $userFriends = [];
        $users = User::all();
        for ($i = 0; $i < count($users) ; $i++) { 
            for ($j = 0; $j < count($friends) ; $j++) { 
                if ($users[$i]->id === $friends[$j]) {
                    array_push($userFriends, $users[$i]);
                }
            }
        }
         
        return response()->json($userFriends);
    }
}
