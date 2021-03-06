var mix = require('laravel-mix'),
  copyWebpackPlugin = require('copy-webpack-plugin'),
  assetsDir         = 'resources/assets/',
  composerDir       = 'vendor/',
  nodeDir           = 'node_modules/',
  publicDir         = 'public/',
  distDir           = 'public/hyosoka_dist/',
  adminJs = [
    nodeDir     + 'jquery/dist/jquery.min.js',
    nodeDir     + 'moment/moment.js',
    nodeDir     + 'moment/min/locales.js',
    nodeDir     + 'bootstrap/dist/js/bootstrap.min.js',
    nodeDir     + 'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
    nodeDir     + 'select2/dist/js/select2.min.js',
    nodeDir     + 'select2/dist/js/i18n/tr.js',
    nodeDir     + 'datatables.net/js/jquery.dataTables.js',
    nodeDir     + 'datatables.net-bs/js/dataTables.bootstrap.js',
    nodeDir     + 'datatables.net-buttons/js/dataTables.buttons.js',
    nodeDir     + 'morris.js/morris.js',
    nodeDir     + 'admin-lte/dist/js/app.min.js',
    nodeDir     + 'raphael/raphael.min.js',
    nodeDir     + 'nestable-fork/dist/jquery.nestable.min.js',
    composerDir + 'yajra/laravel-datatables-buttons/src/resources/assets/buttons.server-side.js',
    assetsDir   + 'js/admin.js'
  ],
  applicationJs = [
    assetsDir + 'js/application.js',
    nodeDir   + 'jquery-floating-social-share/dist/jquery.floating-social-share.min.js',
  ];


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  plugins: [
    new copyWebpackPlugin([
      { from: nodeDir    + 'tinymce', to: 'packages/tinymce' },
      { from: assetsDir  + 'other/tinymce-localautosave', to: 'packages/tinymce/plugins/localautosave' },
    ])
  ]
});

mix
  .copy(nodeDir   + 'font-awesome/fonts', publicDir + 'fonts')
  .copy(nodeDir   + 'bootstrap/fonts', publicDir + 'fonts')
  .less(assetsDir + 'less/admin.less', distDir + 'css/admin.css').version()
  .less(assetsDir + 'less/application.less', distDir + 'css/application.css').version()
  .combine(adminJs, distDir + 'js/admin.js')
  .js(applicationJs, distDir +'js/application.js').version();

