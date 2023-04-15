import { useEffect } from "react";
import { WeeklyWeather } from "../../Entities/dailyWeather";
import BoxTemperature from "../BoxTemperature";
import { Icon } from "../../Styles/globalStyles";
import { getWeatherIcon } from "../../Utils/getWeatherIcon";
import i18n from "../../Languages";
import * as S from "./style";

interface CardProps {
  data: WeeklyWeather;
  onClick: (day?: string) => void;
  selectedDay: string;
}

export default function Card({ data, onClick, selectedDay }: CardProps) {
  function getWeekDayName(date: string) {
    return new Date(date.concat("T00:00:00")).toLocaleDateString(
      i18n.language,
      {
        weekday: "short",
      },
    );
  }

  return (
    <S.Card onClick={() => onClick()} selectedDay={selectedDay === data.day}>
      <h4>{getWeekDayName(data.day)}</h4>
      <Icon src={getWeatherIcon(data.weatherCode)} />
      <S.Box>
        <BoxTemperature
          minTemperature={data.minTemperature}
          maxTemperature={data.maxTemperature}
        />
      </S.Box>
    </S.Card>
  );
}
