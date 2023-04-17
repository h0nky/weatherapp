const request = require('postman-request');

const getGeocodeUrl = address => {
    if (!address || !address.length) {
        console.log('Error! Check your input and try again.');
        return null;
    }
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiemgzIiwiYSI6ImNsZzk3eW55ajE0d2QzZ285Z29hcXMzMnIifQ.nRH6H8AQtNM9FkRxitDpsQ&limit=1`
};
const getWeatherUrl = location =>  `http://api.weatherstack.com/current?access_key=2bc200a82ad20d864dccf7e7a868edad&query=${location}&units=f`;

const getGeocode = (url, callback) => {
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', null);
        } else if (!response.body.features.length) {
            callback('Something wrong with your request!', null);
        } else {
            const [ long, lang ] = response.body.features[0].center;
            callback(null, {
                latitude: lang,
                longtitude: long,
                location: response.body.features[0].place_name
            });
        }
    })
}

const getWeatherForecast = (url, callback) => {
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to retrieve the forecast!', null);
        } else if (response?.body?.error) {
            callback('Something wrong with your request!', null);
        } else {
            const weatherData = response.body.current;
            const result = `${weatherData.weather_descriptions[0]}. The current temperature is ${weatherData?.temperature} degrees out. It feels like ${weatherData?.feelslike} degrees`;
            callback(null, result);
        }
    });
}


module.exports = { getGeocode, getGeocodeUrl, getWeatherForecast, getWeatherUrl };