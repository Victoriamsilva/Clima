export interface CurrentWeather {
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windSpeed: number;
  details?: {
    climate: string;
    icon: string;
  };
}
