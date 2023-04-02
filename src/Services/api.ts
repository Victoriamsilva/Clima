import axios from "axios";

const url = "https://api.open-meteo.com/v1/forecast?latitude=-23.53&longitude=-46.79&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&start_date=2023-04-11&end_date=2023-04-17&timezone=America%2FSao_Paulo&current_weather=true"

export const api = axios.create({
    baseURL: url,
  });

