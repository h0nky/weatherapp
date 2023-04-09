const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=2bc200a82ad20d864dccf7e7a868edad&query=Berlin&units=f';
const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiemgzIiwiYSI6ImNsZzk3eW55ajE0d2QzZ285Z29hcXMzMnIifQ.nRH6H8AQtNM9FkRxitDpsQ&limit=1';

request({ url, json: true }, (error, response) => {
    if (error) {
        console.error('Unable to retrieve the forecast!');
    } else if (response?.body?.error) {
        console.log('Something wrong with your request!');
    } else {
        const weatherData = response.body.current;
        const result = `${weatherData.weather_descriptions[0]}. The current temperature is ${weatherData?.temperature} degrees out. It feels like ${weatherData?.feelslike} degrees`;
        console.log(result);
    }
});

request({ url: mapBoxUrl, json: true }, (error, result) => {
    if (error) {
        console.log('Unable to reach the service :(');
    } else if (!result.body.features.length) {
        console.log('Something wrong with your request!');
    } else {
        const [ long, lang ] = result.body.features[0].center;
        console.log('Longtitude', long);
        console.log('Langtitude', lang);
    }
});