import { createContext } from "react";
import { CurrentWeather } from "../Entities/currentWeather";
import { DailyWeather, WeeklyWeather } from "../Entities/dailyWeather";
import { ILocation } from "../Entities/location";

const ClimateContext = createContext({
  currentWeather: {} as CurrentWeather,
  dailyWeather: {} as DailyWeather,
  weeklyWeather: {} as WeeklyWeather[],
  locationData: {} as ILocation,
  selectedDay: "",
  setSelectedDay: (day: string) => {},
  setDailyWeather: (data: DailyWeather) => {},
  setCurrentWeather: (data: CurrentWeather) => {},
  setWeeklyWeather: (data: WeeklyWeather[]) => {},
  setLocationData: (data: ILocation) => {},
});
export default ClimateContext;
