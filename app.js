const { getGeocode, getGeocodeUrl, getWeatherForecast, getWeatherUrl } = require('./utils/geocode');

getGeocode(getGeocodeUrl('Berlin'), (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

getWeatherForecast(getWeatherUrl('Berlin'), (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})
