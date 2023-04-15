import ClearDay from "../Assets/Icons/clearDay.svg";
import Cloudy from "../Assets/Icons/cloudy.svg";
import Fog from "../Assets/Icons/fog.svg";
import FogLight from "../Assets/Icons/fogLight.svg";
import Drizzle from "../Assets/Icons/drizzle.svg";
import PartlyCloudy from "../Assets/Icons/partlyCloudyDay.svg";
import Flurries from "../Assets/Icons/flurries.svg";
import RainLight from "../Assets/Icons/rainLight.svg";
import FreezingDrizzle from "../Assets/Icons/freezingDrizzle.svg";
import RainModerate from "../Assets/Icons/rainModerate.svg";
import HeavyRain from "../Assets/Icons/rainHeavy.svg";
import FreezingRain from "../Assets/Icons/freezingRain.svg";
import FreezingRainHeavy from "../Assets/Icons/freezingRainHeavy.svg";
import Snow from "../Assets/Icons/snow.svg";
import SnowLight from "../Assets/Icons/snowLight.svg";
import Storm from "../Assets/Icons/tstorm.svg";
import SnowHeavy from "../Assets/Icons/snowHeavy.svg";

export const getWeatherIcon = (code: number) => {
  const weatherCodesIcon: any = {
    0: ClearDay,
    1: PartlyCloudy,
    2: PartlyCloudy,
    3: Cloudy,
    45: FogLight,
    48: Fog,
    51: Drizzle,
    53: Drizzle,
    55: RainLight,
    56: FreezingDrizzle,
    57: FreezingDrizzle,
    61: RainLight,
    63: RainModerate,
    65: HeavyRain,
    66: FreezingRain,
    67: FreezingRainHeavy,
    71: SnowLight,
    73: Snow,
    75: SnowHeavy,
    77: Flurries,
    80: RainModerate,
    81: HeavyRain,
    82: HeavyRain,
    85: SnowLight,
    86: SnowHeavy,
    95: Storm,
    96: Storm,
    99: Storm,
  };

  return weatherCodesIcon[code];
};
