import data from '../../MockData.js';

export default let currentWeatherData = (data) => {
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

export default let sevenHourWeatherData = (data) => {
  return {
    hour: data.hourly_forecast[i].FCTTIME.hour,
    condition: data.hourly_forecast[i].wx,
    condtionIcon: data.hourly_forecast[i].icon_url,
    temperature: data.hourly_forecast[i].temp.english
  }
};

export default let tenDayWeatherData = (data) => {
  return {
    day:  data.forecast.simpleforecast.forecastday[i].date.weekday,
    condition:  data.forecast.simpleforecast[i].conditions,
    condtionIcon:  data.forecast.simpleforecast[i].icon_url,
    high:  data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
    low:  data.forecast.simpleforecast.forecastday[i].low.fahrenheit
  }
};

