import { DailyWeather, HourlyWeather } from "../../Entities/dailyWeather";
import BoxTemperature from "../BoxTemperature";
import Chip from "../Chip";
import Rain from "../../Assets/Icons/rain.svg";
import Wind from "../../Assets/Icons/wind.svg";
import Sunrise from "../../Assets/Icons/sunrise.svg";
import Sunset from "../../Assets/Icons/sunset.svg";
import Temperature from "../../Assets/Icons/temperature.svg";
import { Icon } from "../../Styles/globalStyles";
import { getHour } from "../../Utils/getHour";
import { getWeatherDetail } from "../../Utils/getWeatherDetail";
import * as S from "./style";
import { useContext } from "react";
import ClimateContext from "../../Context/context";

export default function MainContent() {
  const { locationData, dailyWeather } = useContext(ClimateContext);
  const day = new Date(dailyWeather.day).getDate();
  return (
    <S.MainContent>
      <p>
        Previsao do dia {day} em{" "}
        {locationData.locationName4 ||
          locationData.locationName3 ||
          locationData.locationName2 ||
          locationData.locationName1}
      </p>

      <p> {getWeatherDetail(dailyWeather.weatherCode).climate}</p>
      <S.Box>
        <Chip title="TEMPERATURA">
          <Icon src={Temperature} size="30px" />
          <div>
            <BoxTemperature
              minTemperature={dailyWeather.minTemperature}
              maxTemperature={dailyWeather.maxTemperature}
            />
          </div>
        </Chip>
        <Chip title="AMANHECER">
          <Icon src={Sunrise} />
          {getHour(
            dailyWeather.sunrise != undefined ? dailyWeather.sunrise : "",
          ) + "h"}
        </Chip>
        <Chip title="CREPUSCULO">
          <Icon src={Sunset} />
          {getHour(
            dailyWeather.sunset != undefined ? dailyWeather.sunset : "",
          ) + "h"}
        </Chip>
        <Chip title="CHUVA">
          <Icon src={Rain} size="30px" />
          {dailyWeather.precipitationProbability + "%" + " de chance"}
        </Chip>
        <Chip title="VENTO">
          <Icon src={Wind} size="30px" />
          {dailyWeather.windSpeed &&
            dailyWeather.windSpeed +
              "km/h" +
              "-" +
              dailyWeather.windDirection +
              "°"}
        </Chip>
        <Chip title="SENSACAO TERMICA">
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
