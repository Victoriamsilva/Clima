import ClearDay from "../Assets/Video/clearDay.mp4";
import Cloudy from "../Assets/Video/cloudy.mp4";
import Fog from "../Assets/Video/fog.mp4";
import Rain from "../Assets/Video/rain.mp4";
import Snow from "../Assets/Video/snow.mp4";
import PartlyCloudy from "../Assets/Video/partilyCloudy.mp4";
import Storm from "../Assets/Video/storm.mp4";

export function getVideoBackground(weatherCode: number) {
  if (weatherCode === 0 || weatherCode === 1) {
    return ClearDay;
  } else if (weatherCode === 2) {
    return PartlyCloudy;
  } else if (weatherCode === 3) {
    return Cloudy;
  } else if (weatherCode === 45 || weatherCode === 48) {
    return Fog;
  } else if (
    (weatherCode > 50 && weatherCode < 70) ||
    weatherCode === 80 ||
    weatherCode === 81 ||
    weatherCode === 82
  ) {
    return Rain;
  } else if (
    weatherCode > 70 &&
    weatherCode < 90 &&
    weatherCode !== 80 &&
    weatherCode !== 81 &&
    weatherCode !== 82
  ) {
    return Snow;
  } else if (weatherCode > 90 && weatherCode < 100) {
    return Storm;
  }
}
