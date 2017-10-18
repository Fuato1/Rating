<?php

use Illuminate\Database\Seeder;

class MessagesTableSeeder extends Seeder
{
    public function run() {
        DB::table('messages')->insert([
            'sender_id' => '1',
            'receiver_id' => '2',
            'message' => "Mensaje al 2"
        ]);

        DB::table('messages')->insert([
            'sender_id' => '1',
            'receiver_id' => '3',
            'message' => "Mensaje al 3"
        ]);

        DB::table('messages')->insert([
            'sender_id' => '1',
            'receiver_id' => '4',
            'message' => "Mensaje al 4"
        ]);

        DB::table('messages')->insert([
            'sender_id' => '2',
            'receiver_id' => '1',
            'message' => "Puto el que lee"
        ]);
    }
}
