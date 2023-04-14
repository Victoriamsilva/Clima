import BoxTemperature from "../BoxTemperature";
import Chip from "../Chip";
import Rain from "../../Assets/Icons/rain.svg";
import Wind from "../../Assets/Icons/wind.svg";
import Sunrise from "../../Assets/Icons/sunrise.svg";
import Sunset from "../../Assets/Icons/sunset.svg";
import Temperature from "../../Assets/Icons/temperature.svg";
import { Icon } from "../../Styles/globalStyles";
import { getHour } from "../../Utils/getHour";
import * as S from "./style";
import { useContext } from "react";
import ClimateContext from "../../Context/context";
import { useTranslation } from "react-i18next";

export default function MainContent() {
  const { locationData, dailyWeather } = useContext(ClimateContext);
  const day = new Date(dailyWeather.day).getDate();
  const { t } = useTranslation();
  return (
    <S.MainContent>
      <p>
        {`${t("mainContentTitle")} ${day} `}
        {locationData.hasLocationName
          ? `${t("in")} ${locationData.name}`
          : t("subtitle")}
      </p>
      <p> {t(`weatherDetail.${dailyWeather.weatherCode}`)}</p>
      <S.Box>
        <Chip title={t("temperature")}>
          <Icon src={Temperature} size="30px" />
          <div>
            <BoxTemperature
              minTemperature={dailyWeather.minTemperature}
              maxTemperature={dailyWeather.maxTemperature}
            />
          </div>
        </Chip>
        <Chip title={t("sunrise")}>
          <Icon src={Sunrise} />
          {getHour(
            dailyWeather.sunrise != undefined ? dailyWeather.sunrise : "",
          ) + "h"}
        </Chip>
        <Chip title={t("sunset")}>
          <Icon src={Sunset} />
          {getHour(
            dailyWeather.sunset != undefined ? dailyWeather.sunset : "",
          ) + "h"}
        </Chip>
        <Chip title={t("rain")}>
          <Icon src={Rain} size="30px" />
          {dailyWeather.precipitationProbability + "%" + " de chance"}
        </Chip>
        <Chip title={t("wind")}>
          <Icon src={Wind} size="30px" />
          {dailyWeather.windSpeed &&
            dailyWeather.windSpeed +
              "km/h" +
              "-" +
              dailyWeather.windDirection +
              "°"}
        </Chip>
        <Chip title={t("feelsLike")}>
          <div>
            <BoxTemperature
              minTemperature={dailyWeather.apparentMinTemperature}
              maxTemperature={dailyWeather.apparentMaxTemperature}
            />
          </div>
        </Chip>
      </S.Box>
    </S.MainContent>
  );
}
