import { useEffect, useRef, useState } from "react";
import i18next from "i18next";
import { Icon } from "../../Styles/globalStyles";
import USA from "../../Assets/Icons/usa.svg";
import Brazil from "../../Assets/Icons/brazil.svg";
import World from "../../Assets/Icons/world.svg";
import Arrow from "../../Assets/Icons/arrow.svg";
import * as S from "./style";
import { useTranslation } from "react-i18next";
import i18n from "../../Languages";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const dropdownRef: any = useRef();

  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
    setIsOpen(false);
  };

  function clickOutside(e: any) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
  }, []);

  useEffect(() => {
    document.title = t("titlePage");
  }, [i18n.language]);

  return (
    <S.Dropdown
      ref={dropdownRef}
      open={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Icon src={World} size="18px" />
      <Icon
        className={`${isOpen ? "arrowUp" : "arrowDown"}`}
        src={Arrow}
        size="18px"
      />
      <S.DropdownContent open={isOpen}>
        <ul>
          <li onClick={() => changeLanguage("pt-BR")}>
            <Icon src={Brazil} size="18px" />
          </li>
          <li>
            <Icon
              src={USA}
              size="18px"
              onClick={() => changeLanguage("en-US")}
            />
          </li>
        </ul>
      </S.DropdownContent>
    </S.Dropdown>
  );
}
