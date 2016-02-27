<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'profession' => $faker->word.' '.$faker->word,
        'phone' => $faker->phoneNumber,
        'phone2' => $faker->phoneNumber,
        'street' => $faker->streetAddress,
        'city' => $faker->city,
        'state' => $faker->state,
        'zip' => $faker->postcode,
        'address2street' => $faker->streetAddress,
        'address2city' => $faker->city,
        'address2state' => $faker->state,
        'address2zip' => $faker->postcode,
        'about' => $faker->paragraph,
        'password' => bcrypt('password'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Organization::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->catchPhrase,
        'label' => $faker->sentence,
        'about' => $faker->paragraph
    ];
});


$factory->define(App\Group::class, function (Faker\Generator $faker) {
    
    $clubsArray = ["Astronomy","Backgammon","Badminton","Baseball","Base Jumping","Basketball","Beach/Sun tanning","Beachcombing","Beadwork","Beatboxing","Becoming A Child Advocate","Bell Ringing","Belly Dancing","Bicycling","Bicycle Polo","Bird watching","Birding","BMX","Blacksmithing","Blogging","BoardGames","Boating","Body Building","Bonsai Tree","Bookbinding","Boomerangs","Bowling","Brewing Beer","Bridge Building","Bringing Food To The Disabled","Building A House For Habitat For Humanity","Building Dollhouses","Butterfly Watching","Button Collecting","Cake Decorating","Calligraphy","Camping","Candle Making","Canoeing","Cartooning","Car Racing","Casino Gambling","Cave Diving","Ceramics","Cheerleading","Chess","Church/church activities","Cigar Smoking","Cloud Watching","Coin Collecting","Collecting","Collecting Antiques","Collecting Artwork","Collecting Hats","Collecting Music Albums","Collecting RPM Records","Collecting Swords","Coloring","Compose Music","Computer activities","Conworlding","Cooking","Cosplay","Crafts","Crafts (unspecified)","Crochet","Crocheting","Cross-Stitch","Crossword Puzzles","Dancing","Darts","Diecast Collectibles","Digital Photography","Dodgeball","Dolls","Dominoes","Drawing","Dumpster Diving","Eating out","Educational Courses","Electronics","Embroidery","Entertaining","Exercise (aerobics, weights)","Falconry","Fast cars","Felting"];

    return [
        'name' => $clubsArray[array_rand($clubsArray)].' Club',
        'label' => $faker->sentence,
        'about' => $faker->paragraph
    ];

});

$factory->define(App\Event::class, function (Faker\Generator $faker) {
    
    $clubsArray = ["Astronomy","Backgammon","Badminton","Baseball","Base Jumping","Basketball","Beach/Sun tanning","Beachcombing","Beadwork","Beatboxing","Becoming A Child Advocate","Bell Ringing","Belly Dancing","Bicycling","Bicycle Polo","Bird watching","Birding","BMX","Blacksmithing","Blogging","BoardGames","Boating","Body Building","Bonsai Tree","Bookbinding","Boomerangs","Bowling","Brewing Beer","Bridge Building","Bringing Food To The Disabled","Building A House For Habitat For Humanity","Building Dollhouses","Butterfly Watching","Button Collecting","Cake Decorating","Calligraphy","Camping","Candle Making","Canoeing","Cartooning","Car Racing","Casino Gambling","Cave Diving","Ceramics","Cheerleading","Chess","Church/church activities","Cigar Smoking","Cloud Watching","Coin Collecting","Collecting","Collecting Antiques","Collecting Artwork","Collecting Hats","Collecting Music Albums","Collecting RPM Records","Collecting Swords","Coloring","Compose Music","Computer activities","Conworlding","Cooking","Cosplay","Crafts","Crafts (unspecified)","Crochet","Crocheting","Cross-Stitch","Crossword Puzzles","Dancing","Darts","Diecast Collectibles","Digital Photography","Dodgeball","Dolls","Dominoes","Drawing","Dumpster Diving","Eating out","Educational Courses","Electronics","Embroidery","Entertaining","Exercise (aerobics, weights)","Falconry","Fast cars","Felting"];
    $eventsArray = ['Meetup', 'Planning Meeting', 'Guest Speaker'];
    return [
        'title' => $clubsArray[array_rand($clubsArray)].' Club '.$eventsArray[array_rand($eventsArray)],
        'label' => $faker->sentence,
        'body' => $faker->paragraph,
        'street' => $faker->streetAddress,
        'city' => $faker->city,
        'state' => $faker->state,
        'zip' => $faker->postcode,
        'event_date' => $faker->dateTimeThisMonth,
    ];
    
});

$factory->define(App\Role::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'label' => $faker->sentence,
        'about' => $faker->paragraph
    ];
});

$factory->define(App\Permission::class, function (Faker\Generator $faker) {
    return [
        'name' => 'can_'.$faker->word.'_'.$faker->word,
        'label' => $faker->sentence,
        'about' => $faker->paragraph
    ];
});


