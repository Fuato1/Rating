<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserFriendsTable extends Migration
{
    public function up()
    {
        Schema::create('user_friends', function (Blueprint $table) {
            $table->integer('user_id');
            $table->integer('friend_id');
            $table->boolean('isFriend');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_friends');
    }
}
