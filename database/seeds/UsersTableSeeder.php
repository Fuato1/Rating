<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Fuato1',
            'email' => 'fuatojfj@gmail.com',
            'password' => bcrypt(123456),
            'rating' => 0,
            'points' => 0
        ]);

        DB::table('users')->insert([
            'name' => 'Atutu',
            'email' => 'atutu@user.com',
            'password' => bcrypt(123456),
            'rating' => 0,
            'points' => 0
        ]);

        DB::table('users')->insert([
            'name' => 'Anonimous',
            'email' => 'anonimous@user.com',
            'password' => bcrypt(123456),
            'rating' => 0,
            'points' => 0
        ]);

        DB::table('users')->insert([
            'name' => 'Papita',
            'email' => 'papita@user.com',
            'password' => bcrypt(123456),
            'rating' => 0,
            'points' => 0
        ]);
    }
}
