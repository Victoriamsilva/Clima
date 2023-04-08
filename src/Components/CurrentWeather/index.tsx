import { useEffect, useState } from "react";
import { DailyWeather, WeeklyWeather } from "../../Entities/dailyWeather";
import BoxTemperature from "../BoxTemperature";
import { Icon } from "../../Styles/globalStyles";
import { getWeatherDetail } from "../../Utils/getWeatherDetail";
import * as S from "./style";
import { CurrentWeather } from "../../Entities/currentWeather";
import Input from "../Input";
import Wind from "../../Assets/Icons/wind.svg";

interface CurrentWeatherProps {
  data: CurrentWeather;
  setLocationData: (location: any) => void;
}

export default function CurrentWeatherBox({
  data,
  setLocationData,
}: CurrentWeatherProps) {
  const details = getWeatherDetail(data.weathercode);
  const [hour, setHour] = useState("");
  function getHour() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    setHour(`${hour}:${minutes}:${seconds}`);
  }
  setInterval(() => {
    getHour();
  }, 1000);
  return (
    <S.CurrentWeatherBox>
      <Input setLocationData={(e) => setLocationData(e)} />
      <S.Content>
        <div>
          <p>{hour}</p>
          <p>Clima atual em Osasco</p>
          <div>
            <Icon src={details.icon} size="70px" />
            <h1>{data.temperature}</h1> <span>°C</span>
          </div>
        </div>
        <p>{details.climate}</p>
        <p className="wind">
          <Icon src={Wind} size="30px" />
          <span>
            {data.windspeed &&
              data.windspeed + "km/h" + "-" + data.winddirection + "°"}
          </span>
        </p>
      </S.Content>
    </S.CurrentWeatherBox>
  );
}
