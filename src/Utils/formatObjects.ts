import { DailyWeather, WeeklyWeather } from "../Entities/dailyWeather";
import { ILocation } from "../Entities/location";
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

export function formatLocation(data: any) {
  let dataFormatted: ILocation[] = [];
  data?.forEach((location: any) => {
    dataFormatted.push({
      country: location?.country,
      locationName1: location?.admin2,
      locationName2: location?.admin1,
      locationName3: location?.admin3,
      locationName4: location?.admin4,
      latitude: location?.latitude,
      longitude: location?.longitude,
      timezone: location?.timezone,
      contryCode: location?.country_code,
      name:
        location.admin2 ||
        location.admin1 ||
        location.admin3 ||
        location.admin4,
    });
  });
  return dataFormatted;
}
