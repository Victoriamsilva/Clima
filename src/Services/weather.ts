import { CurrentWeather } from "../Entities/currentWeather";
import { DailyWeather } from "../Entities/dailyWeather";
import { api } from "./api";

const url =
  "?latitude=-23.53&longitude=-46.79&timezone=America%2FSao_Paulo&daily=temperature_2m_max,temperature_2m_min,weathercode";

export async function getCurrentWeather(): Promise<CurrentWeather> {
  const { data } = await api.get(
    "?latitude=-23.53&longitude=-46.79&timezone=America%2FSao_Paulo&current_weather=true",
  );
  return data.current_weather;
}

export async function getDailyWeather(date: string) {
  const { data } = await api.get(
    url.concat(
      `,apparent_temperature_max,apparent_temperature_min,uv_index_max,precipitation_probability_max,precipitation_probability_min,precipitation_probability_mean,sunrise,sunset,windspeed_10m_max,winddirection_10m_dominant&hourly=temperature_2m,relativehumidity_2m,rain,showers,weathercode,cloudcover,visibility,uv_index&forecast_days=1&start_date=${date}&end_date=${date}&weather_code=true`,
    ),
  );
  return data;
}

export async function getWeeklyWeather() {
  const { data } = await api.get(url);
  return data.daily;
}
