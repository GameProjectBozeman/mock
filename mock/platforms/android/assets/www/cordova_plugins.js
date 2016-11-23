cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-locationservices.Coordinates",
        "file": "plugins/cordova-plugin-locationservices/www/Coordinates.js",
        "pluginId": "cordova-plugin-locationservices",
        "clobbers": [
            "cordova.plugins.locationServices.Coordinates",
            "plugin.locationServices.Coordinates"
        ]
    },
    {
        "id": "cordova-plugin-locationservices.PositionError",
        "file": "plugins/cordova-plugin-locationservices/www/PositionError.js",
        "pluginId": "cordova-plugin-locationservices",
        "clobbers": [
            "cordova.plugins.locationServices.PositionError",
            "plugin.locationServices.PositionError"
        ]
    },
    {
        "id": "cordova-plugin-locationservices.Position",
        "file": "plugins/cordova-plugin-locationservices/www/Position.js",
        "pluginId": "cordova-plugin-locationservices",
        "clobbers": [
            "cordova.plugins.locationServices.PositionError",
            "plugin.locationServices.PositionError"
        ]
    },
    {
        "id": "cordova-plugin-locationservices.LocationServices",
        "file": "plugins/cordova-plugin-locationservices/www/LocationServices.js",
        "pluginId": "cordova-plugin-locationservices",
        "clobbers": [
            "cordova.plugins.locationServices.geolocation",
            "plugin.locationServices.geolocation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-locationservices": "2.1.0"
};
// BOTTOM OF METADATA
});