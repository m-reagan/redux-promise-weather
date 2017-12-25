import axios from 'axios';

const API_KEY = '8f9d40d853a9048ed0d50c647839df70'
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=`;

export const FETCH_WEATHER = 'fetch-weather';

export function fetchWeatherActCreator(cityName) {
  const url = `${WEATHER_URL}${cityName},in`;
  const request = axios.get(url);
  console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
