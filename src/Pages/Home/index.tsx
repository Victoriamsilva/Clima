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
import CurrentWeatherBox from "../../Components/CurrentWeather";
import { itens } from "../itens";
export interface ILocation {
  name?: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

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
  const [locationData, setLocationData] = useState<ILocation | null>(null);

  async function getCurrentWeatherData() {
    if (locationData) {
      const data = await getCurrentWeather(locationData);
      setCurrentWeather(data);
    }
  }

  async function getWeeklyWeatherData() {
    if (locationData) {
      const data = await getWeeklyWeather(locationData);
      const dataFormatted = formatWeeklyWeather(data);
      setWeeklyWeather(dataFormatted);
    }
  }

  async function getDailyWeatherData(day: string) {
    if (locationData) {
      const data = await getDailyWeather(day, locationData);
      const dataDailyFormatted = formatDailyWeather(data);
      // const dataHourlyFormatted = formatHourlyWeather(data.hourly);
      setDailyWeather(dataDailyFormatted);
      // setHourlyWeather(dataHourlyFormatted);
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
    console.log(locationData);
  }, [locationData]);

  useEffect(() => {
    setVideo(
      getVideoBackground(
        (selectedDay !== null
          ? dailyWeather?.weatherCode
          : currentWeather?.weathercode) || 1,
      ),
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
      {currentWeather && (
        <CurrentWeatherBox
          data={currentWeather}
          setLocationData={(e) => setLocationData(e)}
        />
      )}
      <S.Box>
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
        {dailyWeather && <MainContent dailyWeather={dailyWeather} />}

        <S.VideoBackground ref={videoRef} autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </S.VideoBackground>
      </S.Box>
    </Container>
  );
}
