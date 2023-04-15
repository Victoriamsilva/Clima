import * as S from "./style";

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
