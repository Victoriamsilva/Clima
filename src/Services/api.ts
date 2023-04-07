import axios from "axios";

const urlWeatherApi = "https://api.open-meteo.com/v1/forecast";
const urlGeoCodingApi = "https://geocoding-api.open-meteo.com/v1/search";

export const weatherApi = axios.create({
  baseURL: urlWeatherApi,
});

export const geoCodingApi = axios.create({
  baseURL: urlGeoCodingApi,
});
