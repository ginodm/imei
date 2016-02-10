var exec = require('cordova/exec');

var imeiExport = {};

imeiExport.getImei = function (successCallback, errorCallback){
		exec(successCallback, errorCallback, "IMEI", "get", []);
    };
	
module.exports = imeiExport;