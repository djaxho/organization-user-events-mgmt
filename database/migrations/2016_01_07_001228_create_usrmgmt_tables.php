<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsrmgmtTables extends Migration
{
    /**
     * Run the migrations.
     * 
     *     Organization
     *          _|_
     *       /       \
     *      /         \
     *   Group1     Group2
     *   /    \     /    \
     *user1     usr2     usr3
     * |
     *role
     * |
     *permission
     *
     *
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('label')->nullable();
            $table->longText('about')->nullable();
            $table->timestamps();
        });

        Schema::create('groups', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('label')->nullable();
            $table->longText('about')->nullable();
            $table->timestamps();
        });

        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('label')->nullable();
            $table->longText('body')->nullable();
            $table->string('street')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip')->nullable();
            $table->dateTime('event_date');
            $table->timestamps();
        });

        Schema::create('eventables', function (Blueprint $table) {
            $table->integer('event_id');
            $table->integer('eventable_id');
            $table->string('eventable_type');
            $table->timestamps();
        });

        //users

        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('label')->nullable();
            $table->longText('about')->nullable();
            $table->timestamps();
        });

        Schema::create('permissions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('label')->nullable();
            $table->longText('about')->nullable();
            $table->timestamps();
        });

        Schema::create('permission_role', function (Blueprint $table) {
            $table->integer('permission_id')->unsigned();
            $table->integer('role_id')->unsigned();

            $table->foreign('permission_id')
                ->references('id')
                ->on('permissions')
                ->onDelete('cascade');

            $table->foreign('role_id')
                ->references('id')
                ->on('roles')
                ->onDelete('cascade');

            $table->primary(['permission_id', 'role_id']);

        });

        Schema::create('role_user', function (Blueprint $table) {
            $table->integer('role_id')->unsigned();
            $table->integer('user_id')->unsigned();

            $table->foreign('role_id')
                ->references('id')
                ->on('roles')
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->primary(['role_id', 'user_id']);

        });

        Schema::create('organization_user', function (Blueprint $table) {
            $table->integer('organization_id')->unsigned();
            $table->integer('user_id')->unsigned();

            $table->foreign('organization_id')
                ->references('id')
                ->on('organizations')
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->primary(['organization_id', 'user_id']);

        });

        Schema::create('event_user', function (Blueprint $table) {
            $table->integer('event_id')->unsigned();
            $table->integer('user_id')->unsigned();

            $table->foreign('event_id')
                ->references('id')
                ->on('events')
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->primary(['event_id', 'user_id']);

        });

        Schema::create('event_editors', function (Blueprint $table) {
            $table->integer('event_id')->unsigned();
            $table->integer('user_id')->unsigned();

            $table->foreign('event_id')
                ->references('id')
                ->on('events')
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->primary(['event_id', 'user_id']);

        });

        Schema::create('group_user', function (Blueprint $table) {
            $table->integer('group_id')->unsigned();
            $table->integer('user_id')->unsigned();

            $table->foreign('group_id')
                ->references('id')
                ->on('groups')
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->primary(['group_id', 'user_id']);

        });

        Schema::create('group_organization', function (Blueprint $table) {
            $table->integer('group_id')->unsigned();
            $table->integer('organization_id')->unsigned();

            $table->foreign('group_id')
                ->references('id')
                ->on('groups')
                ->onDelete('cascade');

            $table->foreign('organization_id')
                ->references('id')
                ->on('organizations')
                ->onDelete('cascade');

            $table->primary(['group_id', 'organization_id']);

        });
        

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('role_user');
        Schema::drop('permission_role');
        Schema::drop('group_user');
        Schema::drop('organization_user');
        Schema::drop('group_organization');
        Schema::drop('event_user');
        Schema::drop('event_editors');

        Schema::drop('organizations');
        Schema::drop('groups');
        Schema::drop('events');
        Schema::drop('eventables');
        Schema::drop('roles');
        Schema::drop('permissions');
    }
}
