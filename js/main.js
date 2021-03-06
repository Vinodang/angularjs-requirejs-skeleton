(function(require) {
    'use strict';

    var baseUrl = '/';

    require.config({
        baseUrl: baseUrl,
        paths: {
            'fw': 'js/fw',
            'conf': 'js/fw/conf',
            'libs': 'js/fw/libs',
            'utils': 'js/utils',
            'features': 'js/features',
            'common': 'js/features/common',
            'jquery': 'bower_components/jquery/dist/jquery.min',
            'angular': 'bower_components/angular/angular.min',
            'angular-route': 'bower_components/angular-route/angular-route.min',
            'lodash': 'bower_components/lodash/dist/lodash.min',
            'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
            'bootstrapcss': 'bower_components/bootstrap/dist/css/bootstrap.min',
            'bootstraptheme': 'bower_components/bootstrap/dist/css/bootstrap-theme.min',
            'maincss': 'css/main',
            'require-css': 'bower_components/require-css/css.min'
        },
        shim: {
            'jquery': {
                exports: '$'
            },
            'lodash': {
                exports: '_'
            },
            'angular': {
                exports: 'angular',
                deps: ['lodash', 'jquery']
            },
            'angular-route': {
                deps: ['angular']
            },
            'bootstrap': {
                deps: ['jquery']
            },
            'maincss': {
                deps: ['bootstraptheme']
            },
            'bootstraptheme': {
                deps: ['bootstrapcss']
            }
        },
        map: {
            '*': {
                'css': 'require-css'
            }
        }
    });

    require(['js/boot']);

}(require));