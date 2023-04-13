import React, { useState } from "react";
import Context from "./context";
import { CurrentWeather } from "../Entities/currentWeather";
import {
  DailyWeather,
  WeeklyWeather,
  HourlyWeather,
} from "../Entities/dailyWeather";
import { ILocation } from "../Entities/location";

export default function ClimateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>(
    {} as CurrentWeather,
  );
  const [dailyWeather, setDailyWeather] = useState<DailyWeather>(
    {} as DailyWeather,
  );
  const [weeklyWeather, setWeeklyWeather] = useState<WeeklyWeather[]>(
    {} as WeeklyWeather[],
  );
  const [selectedDay, setSelectedDay] = useState("");
  const [locationData, setLocationData] = useState<ILocation>({} as ILocation);
  return (
    <Context.Provider
      value={{
        currentWeather,
        dailyWeather,
        weeklyWeather,
        locationData,
        setDailyWeather,
        setCurrentWeather,
        setWeeklyWeather,
        setLocationData,
        selectedDay,
        setSelectedDay,
      }}
    >
      {children}
    </Context.Provider>
  );
}
