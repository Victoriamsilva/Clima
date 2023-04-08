import { useState, useEffect, useRef } from "react";
import * as S from "./style";
import { useDebounce } from "../../Utils/useDebounce";
import { getLocations } from "../../Services/geoCoding";
import { formatLocation } from "../../Utils/formatObjects";
import { ILocation } from "../../Entities/location";
import { Icon } from "../../Styles/globalStyles";
import Search from "../../Assets/Icons/search.svg";
import Loading from "../../Assets/Icons/loading.svg";

interface InputProps {
  setLocationData: (location: any) => void;
}

export default function Input({ setLocationData }: InputProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const debouncedSearchTerm: string = useDebounce<string>(searchTerm);
  const handleFilter = (event: any) => {
    setSearchTerm(event.target.value);
  };

  function handleClickAutoComplete(value: string, location: ILocation) {
    setLocationData(location);
    setSearchTerm(value);
  }

  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.length > 1) {
      setIsSearching(true);
      getLocations(debouncedSearchTerm).then((results) => {
        setIsSearching(false);
        setResults(formatLocation(results));
      });
    } else {
      setIsSearching(false);
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  function clickOutside(e: any) {
    if (e.target.id !== "search") {
      setResults([]);
    }
  }

  useEffect(() => {
    document.addEventListener("click", clickOutside);
  }, []);

  return (
    <S.Box isSearching={isSearching}>
      <Icon
        src={isSearching ? Loading : Search}
        size={isSearching ? "15px" : "20px"}
      />
      <S.Input
        id="search"
        hasResult={results.length ? true : false}
        type="text"
        placeholder="Pesquisar por cidade . . ."
        value={searchTerm}
        onChange={handleFilter}
      />
      {results?.length ? (
        <S.List>
          {results.slice(0, 5).map((value: ILocation, index) => {
            const lineString = `${
              value.locationName4 !== undefined
                ? value.locationName4 + ", "
                : ""
            } ${
              value.locationName3 !== undefined
                ? value.locationName3 + ", "
                : ""
            } ${
              value.locationName1 !== undefined
                ? value.locationName1 + ", "
                : ""
            } ${
              value.locationName2 !== undefined
                ? value.locationName2 + ", "
                : ""
            } ${value.contryCode}`;
            return (
              <div
                key={index}
                onClick={() => handleClickAutoComplete(lineString, value)}
              >
                <span>{lineString}</span>
              </div>
            );
          })}
        </S.List>
      ) : null}
    </S.Box>
  );
}
