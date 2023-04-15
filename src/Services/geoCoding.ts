import i18n from "../Languages";
import { geoCodingApi as api } from "./api";

export async function getLocations(search: string) {
  const { data } = await api.get(
    `?name=${search}&language=${i18n.language.substring(
      0,
      2,
    )}&count=5&format=json`,
  );
  return data.results;
}
