import { useEffect } from "react";
import { DailyWeather, WeeklyWeather } from "../../Entities/dailyWeather";
import BoxTemperature from "../BoxTemperature";
import * as S from "./style";
import { Icon } from "../../Styles/globalStyles";
import { getWeatherDetail } from "../../Utils/getWeatherDetail";

interface CardProps {
  data: WeeklyWeather;
  onClick: (day?: string) => void;
  selectedDay: string;
}

export default function Card({ data, onClick, selectedDay }: CardProps) {
  function getWeekDayName(date: string) {
    return new Date(date.concat("T00:00:00")).toLocaleDateString("pt-BR", {
      weekday: "short",
    });
  }

  useEffect(() => {
    getWeekDayName(data.day);
  }, []);
  return (
    <S.Card onClick={() => onClick()} selectedDay={selectedDay === data.day}>
      <h4>{getWeekDayName(data.day)}</h4>
      <Icon src={getWeatherDetail(data.weatherCode || -1).icon} />
      <S.Box>
        <BoxTemperature
          minTemperature={data.minTemperature}
          maxTemperature={data.maxTemperature}
        />
      </S.Box>
    </S.Card>
  );
}
