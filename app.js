const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=2bc200a82ad20d864dccf7e7a868edad&query=Berlin';

request({ url }, (error, response) => {
    const weatherData = JSON.parse(response.body);
    console.log(weatherData.current);
});