import { useState, useEffect, useRef } from "react";
import Input from "../../Components/Input";
import MainContent from "../../Components/MainContent";
import { CurrentWeather } from "../../Entities/currentWeather";
import {
  DailyWeather,
  HourlyWeather,
  WeeklyWeather,
} from "../../Entities/dailyWeather";
import { Container } from "../../Styles/globalStyles";
import Card from "../../Components/Card";
import * as S from "./style";

import {
  getCurrentWeather,
  getDailyWeather,
  getWeeklyWeather,
} from "../../Services/weather";
import { getHour } from "../../Utils/getHour";
import { getVideoBackground } from "../../Utils/getVideoBackground";
import {
  formatDailyWeather,
  formatHourlyWeather,
  formatWeeklyWeather,
} from "../../Utils/formatObjects";

export default function Home() {
  const [video, setVideo] = useState<any>(undefined);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null,
  );
  const [dailyWeather, setDailyWeather] = useState<DailyWeather | null>(null);
  const [weeklyWeather, setWeeklyWeather] = useState<WeeklyWeather[] | null>(
    null,
  );
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeather[] | null>(
    null,
  );
  const [selectedDay, setSelectedDay] = useState("");

  async function getCurrentWeatherData() {
    const data = await getCurrentWeather();
    setCurrentWeather(data);
  }

  async function getWeeklyWeatherData() {
    const data = await getWeeklyWeather();
    const dataFormatted = formatWeeklyWeather(data);
    setWeeklyWeather(dataFormatted);
  }

  async function getDailyWeatherData(day: string) {
    const data = await getDailyWeather(day);
    const dataDailyFormatted = formatDailyWeather(data.daily);
    const dataHourlyFormatted = formatHourlyWeather(data.hourly);
    console.log(dataDailyFormatted);
    setDailyWeather(dataDailyFormatted);
    setHourlyWeather(dataHourlyFormatted);
  }

  function onChangeDay(day: string) {
    setSelectedDay(day);
    getDailyWeatherData(day);
  }

  useEffect(() => {
    getCurrentWeatherData();
    getWeeklyWeatherData();
  }, []);

  useEffect(() => {
    setVideo(
      getVideoBackground((dailyWeather && dailyWeather.weatherCode) || -1),
    );
  }, [dailyWeather]);

  const videoRef = useRef(video);
  const previousUrl = useRef(video);
  useEffect(() => {
    if (videoRef.current === video) {
      return;
    }
    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = video;
  }, [video]);

  return (
    <Container>
      <Input />
      {currentWeather && (
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
      <S.Grid>
        {weeklyWeather &&
          weeklyWeather.map((item: WeeklyWeather, index) => (
            <Card
              data={item}
              key={index}
              onClick={() => onChangeDay(item.day)}
              selectedDay={selectedDay}
            />
          ))}
      </S.Grid>
      {dailyWeather && hourlyWeather && (
        <MainContent
          dailyWeather={dailyWeather}
          hourlyWeather={hourlyWeather}
        />
      )}

      <S.VideoBackground ref={videoRef} autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </S.VideoBackground>
    </Container>
  );
}
