const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=2bc200a82ad20d864dccf7e7a868edad&query=Berlin&units=f';

request({ url, json: true }, (error, { body }) => {
    const weatherData = body.current;
    const result = `${weatherData.weather_descriptions[0]}. The current temperature is ${weatherData?.temperature} degrees out. It feels like ${weatherData?.feelslike} degrees`;
    console.log(result);
});