import { CurrentWeather } from "../Entities/currentWeather";
import { DailyWeather } from "../Entities/dailyWeather";
import { ILocation } from "../Pages/Home";
import { weatherApi as api } from "./api";

export async function getCurrentWeather(
  location: ILocation,
): Promise<CurrentWeather> {
  const { data } = await api.get(
    `?latitude=${location.latitude}&longitude=${location.longitude}&timezone=${location.timezone}&current_weather=true`,
  );
  return data.current_weather;
}

export async function getDailyWeather(
  date: string,
  location: ILocation,
): Promise<DailyWeather> {
  const { data } = await api.get(
    `?latitude=${location.latitude}&longitude=${location.latitude}&timezone=${location.timezone}&daily=temperature_2m_max,temperature_2m_min,weathercode,apparent_temperature_max,apparent_temperature_min,uv_index_max,precipitation_probability_max,precipitation_probability_min,precipitation_probability_mean,sunrise,sunset,windspeed_10m_max,winddirection_10m_dominant&start_date=${date}&end_date=${date}&weather_code=true`,
  );
  return data.daily;
}

export async function getWeeklyWeather(location: ILocation) {
  const { data } = await api.get(
    `?latitude=${location.latitude}&longitude=${location.latitude}&timezone=${location.timezone}&daily=temperature_2m_max,temperature_2m_min,weathercode`,
  );
  return data.daily;
}
