import { useContext, useEffect, useState } from "react";
import { Icon } from "../../Styles/globalStyles";
import Input from "../InputSearch";
import ClimateContext from "../../Context/context";
import { useTranslation } from "react-i18next";
import * as S from "./style";

export default function CurrentWeatherBox() {
  const { t } = useTranslation();
  const { currentWeather, locationData } = useContext(ClimateContext);
  const [hour, setHour] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <S.CurrentWeatherBox>
      <Input />
      <S.Content>
        {currentWeather && (
          <>
            <div>
              <p>{hour}</p>
              <p>
                {t("currentWeatherTitle")}{" "}
                {locationData.hasLocationName
                  ? `${t("in")} ${locationData.name}`
                  : t("subtitle")}
              </p>
              <p>{currentWeather.details?.climate}</p>
              <div>
                {currentWeather.details?.icon !== undefined && (
                  <Icon src={currentWeather.details.icon} size="50px" />
                )}
                <h1>{currentWeather.temperature}</h1> <span>°C</span>
              </div>
            </div>
          </>
        )}
      </S.Content>
    </S.CurrentWeatherBox>
  );
}
