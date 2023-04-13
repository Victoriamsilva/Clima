import { useState, useEffect, useRef, useContext } from "react";
import Input from "../../Components/InputSearch";
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
import CurrentWeatherBox from "../../Components/CurrentWeather";
import { itens } from "../itens";
import ClimateContext from "../../Context/context";
import { getWeatherDetail } from "../../Utils/getWeatherDetail";
export interface ILocation {
  name?: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export default function Home() {
  const [video, setVideo] = useState<any>(undefined);
  const {
    currentWeather,
    dailyWeather,
    locationData,
    setCurrentWeather,
    setDailyWeather,
    setLocationData,
    setWeeklyWeather,
    weeklyWeather,
    selectedDay,
    setSelectedDay,
  } = useContext(ClimateContext);
  async function getCurrentWeatherData() {
    if (locationData.latitude !== undefined) {
      const data = await getCurrentWeather(locationData);
      setCurrentWeather({
        ...data,
        details: getWeatherDetail(data.weathercode),
      });
    }
  }

  async function getWeeklyWeatherData() {
    if (locationData.latitude !== undefined) {
      const data = await getWeeklyWeather(locationData);
      const dataFormatted = formatWeeklyWeather(data);
      setWeeklyWeather(dataFormatted);
    }
  }

  async function getDailyWeatherData(day: string) {
    if (locationData.latitude !== undefined) {
      const data = await getDailyWeather(day, locationData);
      const dataDailyFormatted = formatDailyWeather(data);
      setDailyWeather(dataDailyFormatted);
    }
  }

  function onChangeDay(day: string) {
    setSelectedDay(day);
    getDailyWeatherData(day);
  }

  function getLocationData() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      const locationData = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timezone: new Date()
          .toLocaleTimeString("en-us", { timeZoneName: "short" })
          .split(" ")[2]
          .replace(/-\d/g, ""),
      };
      setLocationData(locationData);
    });
  }

  useEffect(() => {
    getLocationData();
  }, []);

  useEffect(() => {
    getCurrentWeatherData();
    getWeeklyWeatherData();
  }, [locationData]);

  useEffect(() => {
    console.log("oi");
    setVideo(
      getVideoBackground(
        (selectedDay !== ""
          ? dailyWeather?.weatherCode
          : currentWeather?.weathercode) || 1,
      ),
    );
  }, [dailyWeather.weatherCode, currentWeather.weathercode]);

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
      {currentWeather.temperature && <CurrentWeatherBox />}
      <S.Box>
        <h3>Previsão da semana</h3>
        <S.Grid>
          {weeklyWeather.length &&
            weeklyWeather.map((item: WeeklyWeather, index) => (
              <Card
                data={item}
                key={index}
                onClick={() => onChangeDay(item.day)}
                selectedDay={selectedDay}
              />
            ))}
        </S.Grid>
        {dailyWeather.day && selectedDay && <MainContent />}

        <S.VideoBackground ref={videoRef} autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </S.VideoBackground>
      </S.Box>
    </Container>
  );
}
