/* global angular */
import Components from 'components';
import Directives from 'directives';
import Services from 'services';

import registerNamespace from 'happenize/utils/registerNamespace';
import registerPartials from 'happenize/utils/registerPartials';

import './assets/styles/style.less';
import 'i18n';

const Config = {
    api: {
        endpoint: 'http://localhost:8011/api/v1'
    }
};

if (CONF_STANDALONE) {
    require('marekmicek-material/angular-material.css');

    require('lodash');

    require('marekmicek-material');
    require('angular-animate');
    require('angular-messages');
    require('angular-sanitize');
    require('ng-sortable');

    require('angular-translate-tp/angular-translate');
    require('angular-translate-loader-partial');

    require('ace-builds/src-min-noconflict/ace');
    require('angular-ui-ace/ui-ace');
}

var dependencies = ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngSanitize', 'as.sortable', 'pascalprecht.translate', 'ui.ace']

var App = angular.module('hpForms', dependencies);

registerNamespace.bind(App)(Directives, 'directive');
registerNamespace.bind(App)(Services, 'service');

App.config(function($compileProvider) {
    App.Config = Config;
    App.ViewState = {};
    App.compileProvider = $compileProvider;

    var isThemeable = false;
    registerPartials.bind(App)(Components, null, isThemeable);
});

App.config(function($translateProvider, $translatePartialLoaderProvider) {
    angular.lowercase = angular.lowercase || angular.$$lowercase;

    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '{part}{lang}.i18n.json'
    });

    $translatePartialLoaderProvider.addPart('/modules/forms/assets/i18n/');

    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');
});

App.service('Config', () => Config);