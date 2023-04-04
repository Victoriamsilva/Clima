import { Icon } from "../../Styles/globalStyles";
import ArrowDown from "../../Assets/Icons/arrowDown.svg";
import ArrowUp from "../../Assets/Icons/arrowUp.svg";
import * as S from "./style";
import React from "react";

interface BoxTemperatureProps {
  title?: string;
  children?: React.ReactNode;
}

export default function BoxTemperature({
  children,
  title,
}: BoxTemperatureProps) {
  return (
    <S.Box>
      <span>{title}</span>
      <div>{children}</div>
    </S.Box>
  );
}
