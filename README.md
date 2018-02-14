## Synopsis

Web app that runs deep into model interactions. Organizations have many Groups, Groups have many Users, Users can belong to many Groups and Organizations. User <-> User have Connections. 
Users can create Organization-wide and/or Group-wide Events and send Invites to Users/Groups/Organizations.
Users can create Organization-wide and/or Group-wide Posts.
Users can Comment/Like Users/Groups/Organizations/Comments/Posts/Events.
Roles and Permissions can be applied to Users/Groupes/Organizations.
Every type of model can be tagged for categorization.

App uses laravel and Angularjs. Has Service Providers, Repositories, Traits, Databse Migrations, Database Seeders, Authorization techniques and much more...

This was th backbone of a very large project which ended up not going anywhere so I am just putting it up to provide ideas/examples for programmers faced with similar build requirments.


## Models
The eloquent models used in this project are:

* Comment
* Connection
* Event
* Group
* Invite
* Like
* Organization
* Permission
* Post
* Reply
* Role
* Tag
* User

## Database Migrations
There are migrations set up for above models and pivot tables.

There are Model factories set up for all models, but before using, check and make sure you know which ones create relationship models at the same time.

There is also a seeder set up (run ```php artisan db:seed```) to get you some dummy data to play with

## Authorization
Authorization uses the standard auth scaffolding included out-of-the-box but with custom policies.

## Set up

* Clone the repo
* Navigate to the file directory in the console and run (you must have composer installed globally on your machine): 
<code><pre>composer install</pre></code>

* Create a MySQL database on your machine (for example, entitled 'usr_mgmt'). And also create one for testing (for example 'usr_mgmt_Test')
* Retrieve a .env file from the project maintainer and update with your machine's information
* From the console, run the command:
<code><pre>php artisan migrate</pre></code>

* For testing, update the .env file to the test database, and run 'php artisan migrate' again. Then reset your .env file back to you main database. (This ensures unit tests are able to work on the test database)
* For testing, make sure your phpunit.xml file contains the name of your test database
