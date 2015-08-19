var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var paths = {
    'jquery': './vendor/bower_resources/jquery/',
    'vue': './vendor/bower_resources/vue/',
    'vue_router': './vendor/bower_resources/vue-router/',
    'bootstrap': './vendor/bower_resources/bootstrap-sass-official/assets/',
    'fontawesome': './vendor/bower_resources/fontawesome/',
    'bourbon': './vendor/bower_resources/bourbon/'
};

elixir(function (mix) {
    mix.sass("*", 'public/css/', {includePaths: [paths.bootstrap + 'stylesheets', paths.fontawesome + 'scss', paths.bourbon + 'app/assets/stylesheets']})
        .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts/bootstrap')
        .copy(paths.fontawesome + 'fonts/**', 'public/fonts/fontawesome')
        .scripts([
            paths.jquery + "dist/jquery.js",
            paths.bootstrap + "javascripts/bootstrap.js",
            paths.vue + "dist/vue.js",
            paths.vue_router + "dist/vue-router.js"
        ], 'public/js/vendor.js', './')
        .browserify('default.js', 'public/js/default.js');
});
