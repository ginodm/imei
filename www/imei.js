var exec = require('cordova/exec');

var imeiExport = {};

imeiExport.getImei = function (successCallback, errorCallback){
		exec(successCallback, errorCallback, "imei", "get", []);
    };
	
module.exports = imeiExport;
