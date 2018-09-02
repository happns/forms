/* global angular */
import Components from 'components';

import registerPartials from 'happenize/utils/registerPartials';

import './assets/styles/style.less';
import 'i18n';

const Config = {
    api: {
        endpoint: ''
    }
};

if (CONF_STANDALONE) {
    require('angular-material/angular-material.css');

    require('lodash');

    require('angular-material');
    require('angular-animate');
    require('angular-messages');
    require('ng-sortable');

    require('angular-translate-tp/angular-translate');
    require('angular-translate-loader-partial');    
}

var dependencies = ['ngMaterial', 'ngAnimate', 'ngMessages', 'as.sortable', 'pascalprecht.translate']

var App = angular.module('hpForms', dependencies);

App.config(function ($compileProvider) {
    App.Config = Config;
    App.ViewState = {};
    App.compileProvider = $compileProvider;

    var isThemeable = false;
    registerPartials.bind(App)(Components, null, isThemeable);
});

App.config(function ($translateProvider, $translatePartialLoaderProvider) {
    angular.lowercase = angular.lowercase || angular.$$lowercase;

    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '{part}{lang}.i18n.json'
    });

    $translatePartialLoaderProvider.addPart('/modules/forms/assets/i18n/');

    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');
});
