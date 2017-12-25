import { combineReducers } from 'redux';
import WeatherListReducer from './reducer_weather_list';

const rootReducer = combineReducers({
  weather: WeatherListReducer
});

export default rootReducer;
