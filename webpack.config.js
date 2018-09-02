var webpack = require('webpack');
var happenize = require('happenize');

var hpForms = happenize.createConfiguration('forms');
var hpFormsStandalone = happenize.createConfiguration('forms');

hpForms.plugins.push(new webpack.DefinePlugin({
	CONF_STANDALONE: false
}));

hpFormsStandalone.plugins.push(new webpack.DefinePlugin({
	CONF_STANDALONE: true
}));

hpFormsStandalone.output.filename = hpFormsStandalone.output.filename.replace('.js', '.standalone.js');

module.exports = [ hpForms, hpFormsStandalone];
