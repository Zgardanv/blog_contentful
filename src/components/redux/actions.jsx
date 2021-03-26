import { GETWEATHER, LOGINCLICK, CLIENT_CITY } from "./types";

export function getWeather(name) {
  return {
    type: GETWEATHER,
    payload: name,
  };
}
export function loginClick() {
  console.log("login button was clicked");
  return {
    type: LOGINCLICK,
    // payload: name
  };
}
export function clientCity(city) {
  console.log("login button was clicked");
  return {
    type: CLIENT_CITY,
    payload: city,
  };
}
