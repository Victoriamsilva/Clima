import axios from "axios";

const url = "https://api.open-meteo.com/v1/forecast";

export const api = axios.create({
  baseURL: url,
});
