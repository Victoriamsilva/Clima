import { useContext, useState } from "react";
import { Icon } from "../../Styles/globalStyles";
import Input from "../InputSearch";
import ClimateContext from "../../Context/context";
import * as S from "./style";

export default function CurrentWeatherBox() {
  const { currentWeather } = useContext(ClimateContext);
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
      <Input />
      <S.Content>
        {currentWeather && (
          <>
            <div>
              <p>{hour}</p>
              <p>Clima atual em Osasco</p>
              <div>
                {currentWeather.details?.icon !== undefined && (
                  <Icon src={currentWeather.details.icon} size="50px" />
                )}
                <h1>{currentWeather.temperature}</h1> <span>°C</span>
              </div>
            </div>
            <p>{currentWeather.details?.climate}</p>
          </>
        )}
      </S.Content>
    </S.CurrentWeatherBox>
  );
}
