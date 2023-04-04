// const weatherCodes: any = {
//   0: "Clear sky",
//   1: "Mainly clear",
//   2: "Partly cloudy",
//   3: "Overcast",
//   45: "Fog",
//   48: "Rime fog",
//   51: "Drizzle light intensity",
//   53: "Drizzle moderate intensity",
//   55: "Drizzle dense intensity",
//   56: "Freezing drizzle light intensity",
//   57: "Freezing drizzle dense intensity",
//   61: "Rain slight intensity",
//   63: "Rain moderate intensity",
//   65: "Rain heavy intensity",
//   66: "Freezing rain light intensity",
//   67: "Freezing rain heavy intensity",
//   71: "Snow fall slight intensity",
//   73: "Snow fall moderate intensity",
//   75: "Snow fall heavy intensity",
//   77: "Snow grains",
//   80: "Rain showers slight intensity",
//   81: "Rain showers moderate intensity",
//   82: "Rain showers violent intensity",
//   85: "Snow showers slight intensity",
//   86: "Snow showers heavy intensity",
//   95: "Thunderstorm slight intensity",
//   96: "Thunderstorm moderate intensity",
//   99: "Thunderstorm heavy hail",
// };
import ClearDay from "../Assets/Icons/clearDay.svg";
import Cloudy from "../Assets/Icons/cloudy.svg";
import Fog from "../Assets/Icons/fog.svg";
import FogLight from "../Assets/Icons/fogLight.svg";
import Drizzle from "../Assets/Icons/drizzle.svg";
import MostlyClear from "../Assets/Icons/mostlyClearDay.svg";
import MostlyCloudy from "../Assets/Icons/mostlyCloudy.svg";
import PartlyCloudy from "../Assets/Icons/partlyCloudyDay.svg";
import Rain from "../Assets/Icons/rain.svg";
import Flurries from "../Assets/Icons/flurries.svg";
import RainLight from "../Assets/Icons/rainLight.svg";
import FreezingDrizzle from "../Assets/Icons/freezingDrizzle.svg";
import RainModerate from "../Assets/Icons/rainModerate.svg";
import HeavyRain from "../Assets/Icons/rainHeavy.svg";
import FreezingRain from "../Assets/Icons/freezingRain.svg";
import FreezingRainLight from "../Assets/Icons/freezingRainLight.svg";
import FreezingRainHeavy from "../Assets/Icons/freezingRainHeavy.svg";
import Snow from "../Assets/Icons/snow.svg";
import SnowLight from "../Assets/Icons/snowLight.svg";
import Storm from "../Assets/Icons/tstorm.svg";

import SnowHeavy from "../Assets/Icons/snowHeavy.svg";

const weatherCodes: any = {
  0: {
    climate: "Céu claro",
    icon: ClearDay,
  },
  1: {
    climate: "Parcialmente claro",
    icon: MostlyClear,
  },
  2: {
    climate: "Parcialmente nublado",
    icon: PartlyCloudy,
  },
  3: {
    climate: "Nublado",
    icon: Cloudy,
  },
  45: {
    climate: "Nevoeiro leve",
    icon: Fog,
  },
  48: {
    climate: "Nevoeiro",
    icon: Fog,
  },
  51: {
    climate: "Garoa leve",
    icon: Drizzle,
  },
  53: {
    climate: "Garoa moderada",

    icon: Drizzle,
  },
  55: {
    climate: "Garoa intensa",
    icon: RainLight,
  },
  56: {
    climate: "Garoa congelante leve",
    icon: FreezingDrizzle,
  },
  57: {
    climate: "Garoa congelante intensa",
    icon: FreezingDrizzle,
  },
  61: {
    climate: "Chuva leve",
    icon: RainLight,
  },
  63: {
    climate: "Chuva moderada",
    icon: RainModerate,
  },
  65: {
    climate: "Chuva intensa",
    icon: HeavyRain,
  },
  66: {
    climate: "Chuva congelante",
    icon: FreezingRain,
  },
  67: {
    climate: "Chuva congelante forte intensidade",
    icon: FreezingRainHeavy,
  },
  71: {
    climate: "Queda de neve leve intensidade",
    icon: SnowLight,
  },
  73: {
    climate: "Queda de neve de intensidade moderada",
    icon: Snow,
  },
  75: {
    climate: "Queda de neve forte intensidade",
    icon: SnowHeavy,
  },
  77: {
    climate: "Grãos de neve",
    icon: Flurries,
  },
  80: {
    climate: "Aguaceiros de fraca intensidade",
    icon: RainModerate,
  },
  81: {
    climate: "Aguaceiros de intensidade moderada",
    icon: HeavyRain,
  },
  82: {
    climate: "Aguaceiros de intensidade violenta",
    icon: HeavyRain,
  },
  85: {
    climate: "Chuvas de neve de leve intensidade",
    icon: SnowLight,
  },
  86: {
    climate: "Chuvas de neve de forte intensidade",
    icon: SnowHeavy,
  },
  95: {
    climate: "Tempestade de leve intensidade",
    icon: Storm,
  },
  96: {
    climate: "Tempestade de intensidade moderada",

    icon: Storm,
  },
  99: {
    climate: "Tempestade de granizo forte",
    icon: Storm,
  },
};

export const getWeatherDetail = (code: number) => {
  return weatherCodes[code];
};
