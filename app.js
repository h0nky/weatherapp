const { getGeocode, getGeocodeUrl, getWeatherForecast, getWeatherUrl } = require('./utils/geocode');

const address = process.argv[2];

const geocodeUrl = getGeocodeUrl(address);

getGeocode(geocodeUrl, (error, geocodeData) => {
    if (!geocodeUrl) {
        return console.log('URL was not provided!');
    }
    if (error) {
        return console.log(error);
    }

    const weatherUrl = getWeatherUrl(geocodeData.location);

    getWeatherForecast(weatherUrl, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
        console.log(geocodeData.location);
        console.log(forecastData);
    })
});
