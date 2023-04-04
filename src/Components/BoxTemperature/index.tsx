import { Icon } from "../../Styles/globalStyles";
import ArrowDown from "../../Assets/Icons/arrowDown.svg";
import ArrowUp from "../../Assets/Icons/arrowUp.svg";
import * as S from "./style";

interface BoxTemperatureProps {
  minTemperature?: number;
  maxTemperature?: number;
}

export default function BoxTemperature({
  maxTemperature,
  minTemperature,
}: BoxTemperatureProps) {
  return (
    <>
      <S.BoxTemp>
        <Icon src={ArrowDown} />
        <span>{minTemperature}</span>
        <span>°C</span>
      </S.BoxTemp>
      <S.BoxTemp>
        <Icon src={ArrowUp} />
        <span>{maxTemperature}</span>
        <span>°C</span>
      </S.BoxTemp>
    </>
  );
}
