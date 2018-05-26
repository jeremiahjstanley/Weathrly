export const currentWeatherData = data => {
  const currentWeatherData = {
    city: data.current_observation.display_location.city,
    condition: data.current_observation.weather,
    temperature: data.current_observation.temp_f,
    day: data.forecast.simpleforecast.forecastday[0].date.weekday,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext
  }
  return currentWeatherData;
}


export const sevenHourWeatherData = data => {
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


export const tenDayWeatherData = data => {
  const tenDayWeatherData = []

  data.forecast.simpleforecast.forecastday.forEach(day => {

    tenDayWeatherData.push({
      day: day.date.weekday,
      condition: day.conditions,
      condtionIcon: day.icon_url,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit  
    });
  })
  return tenDayWeatherData
};

