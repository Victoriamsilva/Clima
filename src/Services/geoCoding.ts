import { geoCodingApi as api } from "./api";

export async function getLocations(search: string) {
  const { data } = await api.get(
    `?name=${search}&language=pt&count=5&format=json`,
  );
  return data.results;
}
