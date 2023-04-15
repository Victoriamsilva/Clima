import { useState, useEffect, useRef, useContext } from "react";
import MainContent from "../../Components/MainContent";
import { WeeklyWeather } from "../../Entities/dailyWeather";
import { Container } from "../../Styles/globalStyles";
import Card from "../../Components/Card";
import {
  getCurrentWeather,
  getDailyWeather,
  getWeeklyWeather,
} from "../../Services/weather";
import { getVideoBackground } from "../../Utils/getVideoBackground";
import {
  formatDailyWeather,
  formatWeeklyWeather,
} from "../../Utils/formatObjects";
import CurrentWeatherBox from "../../Components/CurrentWeather";
import ClimateContext from "../../Context/context";
import { getWeatherIcon } from "../../Utils/getWeatherIcon";
import { useTranslation } from "react-i18next";
import Dropdown from "../../Components/Dropdown";
import * as S from "./style";

export interface ILocation {
  name?: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export default function Home() {
  const [loading, setLoading] = useState(false);
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
  const { t } = useTranslation();

  async function getCurrentWeatherData() {
    if (locationData.latitude !== undefined) {
      const data = await getCurrentWeather(locationData);
      setCurrentWeather({
        ...data,
        details: {
          icon: getWeatherIcon(data.weathercode),
          climate: t(`weatherDetail.${data.weathercode}`),
        },
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
    setLoading(true);
    getLocationData();
  }, []);

  useEffect(() => {
    getCurrentWeatherData();
    getWeeklyWeatherData();
  }, [locationData]);

  useEffect(() => {
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

  useEffect(() => {
    if (weeklyWeather.length > 0 && currentWeather.temperature && video) {
      setLoading(false);
    }
  }, [dailyWeather, weeklyWeather]);

  useEffect(() => {
    if (dailyWeather.day) {
      document.getElementById("main-content")?.scrollIntoView();
    }
  }, [dailyWeather.day]);

  return (
    <Container>
      <Dropdown />
      {loading ? null : (
        <>
          <CurrentWeatherBox />
          <S.Box>
            <h3>
              {t("homeTitle")}{" "}
              {locationData.hasLocationName
                ? `${t("in")} ${locationData.name}`
                : t("subtitle")}
            </h3>
            <S.Grid>
              {weeklyWeather.length > 0 &&
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
          </S.Box>
        </>
      )}
      <S.VideoBackground ref={videoRef} autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </S.VideoBackground>
    </Container>
  );
}
