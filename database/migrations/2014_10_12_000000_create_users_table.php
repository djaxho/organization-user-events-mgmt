<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('phone')->nullable();
            $table->string('phone2')->nullable();
            $table->string('address1street')->nullable();
            $table->string('address1city')->nullable();
            $table->string('address1state')->nullable();
            $table->string('address1zip')->nullable();
            $table->string('address2street')->nullable();
            $table->string('address2city')->nullable();
            $table->string('address2state')->nullable();
            $table->string('address2zip')->nullable();
            $table->longText('about')->nullable();
            $table->string('email')->unique();
            $table->string('password', 60);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
