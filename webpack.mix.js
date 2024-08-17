const mix = require("laravel-mix");
require("mix-tailwindcss");

mix
  .js("src/app.js", "./assets").options({
    processCssUrls: false
 });
mix.disableNotifications();
