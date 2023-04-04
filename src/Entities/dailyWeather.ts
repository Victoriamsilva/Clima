export interface WeeklyWeather {
  day: string;
  maxTemperature: number;
  minTemperature: number;
  weatherCode: number;
}

export interface DailyWeather extends WeeklyWeather {
  apparentMaxTemperature: number;
  apparentMinTemperature: number;
  precipitationProbability: number;
  sunrise: string;
  sunset: string;
  windSpeed: number;
  windDirection: string;
}

export interface HourlyWeather {}
