import { useEffect, useState } from "react";
import { api } from "../../Services/api";
import * as S from "./style";
import { CurrentWeather } from "../../Entities/currentWeather";
import { DaylyWeather } from "../../Entities/dailyWeather";
import Card from "../Card";

export default function MainContent() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null,
  );
  const [dailyWeather, setDailyWeather] = useState<DaylyWeather[] | null>(null);

  const getData = () => {
    api.get("").then(({ data }) => {
      setDailyWeather(formatDailyWeather(data.daily));
      setCurrentWeather(data.current_weather);
    });
  };

  function formatDailyWeather(data: any): DaylyWeather[] {
    let dataFormatted: DaylyWeather[] = [];
    data.time.forEach((day: string, index: number) => {
      dataFormatted.push({
        apparentMaxTemperature: data.apparent_temperature_max[index],
        apparentMinTemperature: data.apparent_temperature_min[index],
        maxTemperature: data.temperature_2m_max[index],
        minTemperature: data.temperature_2m_min[index],
        day: day,
      });
    });
    return dataFormatted;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.MainContent>
      {currentWeather != null && (
        <S.CurrentWheater>
          <h1>{currentWeather.temperature}</h1>
          <span>°C</span>
          <p>
            Chuva:
            <br />
            Umidade:
            <br />
            Vento:
          </p>
        </S.CurrentWheater>
      )}
      {dailyWeather != null &&
        dailyWeather.map((item: DaylyWeather) => <Card data={item} />)}
    </S.MainContent>
  );
}
