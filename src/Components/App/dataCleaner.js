import data from '../../MockData.js';

export const currentWeatherData = {
    city: data.current_observation.display_location.city,
    condition: data.current_observation.weather,
    temperature: data.current_observation.temp_f,
    day: data.forecast.simpleforecast.forecastday[0].date.weekday,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext
  }


export const sevenHourWeatherData = (data) => {
  const sevenHourWeatherData = []; 

  data.hourly_forecast.splice(0, 6).forEach(hour => {

    sevenHourWeatherData.push({
      hour: hour.FCTTIME.civil,
      condition: hour.wx,
      condtionIcon: hour .icon_url,
      temperature: hour.temp.english
    });
  }); 
  return sevenHourWeatherData;
}


// export const tenDayWeatherData = (data) => {
//   return {
//     day: data.forecast.simpleforecast.forecastday[i].date.weekday,
//     condition: data.forecast.simpleforecast[i].conditions,
//     condtionIcon: data.forecast.simpleforecast[i].icon_url,
//     high: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
//     low: data.forecast.simpleforecast.forecastday[i].low.fahrenheit
//   }
// };

