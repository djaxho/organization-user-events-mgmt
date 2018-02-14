//var elixir = require('laravel-elixir');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

/**
 * task - 'default'
 * executes 'live-monitor'
 */
gulp.task('default', ['live-monitor']);

/**
 * task - 'laravel-views'
 * monitor laravel views
 */
gulp.task('laravel-views', function() {
    gulp.src('resources/views/**/*.blade.php')
        .pipe(livereload());
});

/**
 * task - 'live-monitor'
 * monitors everything
 */
gulp.task('live-monitor', function() {
    livereload.listen();
    gulp.watch('resources/views/**/*.blade.php', ['laravel-views']);
});

//elixir(function(mix) {
//    mix.sass('app.scss');
//});
