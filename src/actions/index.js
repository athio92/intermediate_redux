import axios from 'axios';
const API_KEY = '6a78596d062df78380eff5944c4e5567';
// const API_KEY = 'b1b15e88fa797225412429c1c50c122a1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//best practice: define all action types into constants,
//and export it to be used in Reducers.
//That way, we don't have to deal with two strings
//in two different places (which may cause bug in future).
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request=axios.get(url);
  
  console.log('Request: ',request);
  return{
    type:FETCH_WEATHER,
    payload:request
  };
}