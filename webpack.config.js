var webpack = require('webpack');
const happenizeFactory = require('happenize/webpack.config.factory');

var hpForms = happenizeFactory('forms');
var hpFormsStandalone = happenizeFactory('forms');

var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
hpForms.plugins.push(new HardSourceWebpackPlugin());
hpFormsStandalone.plugins.push(new HardSourceWebpackPlugin());

hpForms.plugins.push(new webpack.DefinePlugin({
	CONF_STANDALONE: false
}));

hpFormsStandalone.plugins.push(new webpack.DefinePlugin({
	CONF_STANDALONE: true
}));

hpFormsStandalone.output.filename = hpFormsStandalone.output.filename.replace('.js', '-standalone.js');
hpFormsStandalone.output.libraryTarget = 'var';

var EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');
var hpFormsStandaloneEsm = happenizeFactory('forms');


hpFormsStandaloneEsm.plugins.push(new webpack.DefinePlugin({
	CONF_STANDALONE: true
}));
hpFormsStandaloneEsm.plugins.push(new EsmWebpackPlugin());
hpFormsStandaloneEsm.output = {
	filename: 'forms-standalone.esm.js',
	library: 'hpForms',
	libraryTarget: 'var'
},

module.exports = [ hpForms, hpFormsStandalone, hpFormsStandaloneEsm];
