import {
  DailyWeather,
  HourlyWeather,
  WeeklyWeather,
} from "../Entities/dailyWeather";
import { getHour } from "./getHour";

export function formatDailyWeather(data: any): DailyWeather {
  let dataFormatted: DailyWeather[] = [];
  data.time.forEach((day: string, index: number) => {
    dataFormatted.push({
      maxTemperature: data.temperature_2m_max[index],
      minTemperature: data.temperature_2m_min[index],
      day,
      precipitationProbability: data.precipitation_probability_mean[index],
      sunrise: data.sunrise[index],
      sunset: data.sunset[index],
      windSpeed: data.windspeed_10m_max[index],
      windDirection: data.winddirection_10m_dominant[index],
      apparentMaxTemperature: data.apparent_temperature_max[index],
      apparentMinTemperature: data.apparent_temperature_min[index],
      weatherCode: data.weathercode[index],
    });
  });
  return dataFormatted[0];
}

export function formatWeeklyWeather(data: any): WeeklyWeather[] {
  let dataFormatted: WeeklyWeather[] = [];
  data.time.forEach((day: string, index: number) => {
    dataFormatted.push({
      maxTemperature: data.temperature_2m_max[index],
      minTemperature: data.temperature_2m_min[index],
      day,
      weatherCode: data.weathercode[index],
    });
  });
  return dataFormatted;
}

export function formatHourlyWeather(data: any): HourlyWeather[] {
  let dataFormatted: HourlyWeather[] = [];
  data.time.forEach((hour: string, index: number) => {
    let object = {
      temperature: data.temperature_2m[index],
      relativeHumidity: data.relativehumidity_2m[index],
      rain: data.rain[index],
      showers: data.showers[index],
      weatherCode: data.weathercode[index],
      cloudCover: data.cloudcover[index],
      visibility: data.visibility[index],
      uvIndex: data.uv_index[index],
      hour: getHour(hour),
    };
    dataFormatted.push(object);
  });
  return dataFormatted;
}