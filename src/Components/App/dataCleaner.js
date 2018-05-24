import data from '../../MockData.js';

let cleanData = (data) => {
  return {
    city: data.current_observation.display_location.city,
    condition: data.current_observation.weather,
    temperature: data.current_observation.temp_f,
    day: data.forecast.simpleforecast.forecastday[0].date.weekday,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext
  }
};

export default cleanData(data);