import styled from "styled-components";

interface CardProps {
  selectedDay: boolean;
}

export const Card = styled.div<CardProps>`
  height: 100px;
  max-width: 200px;
  backdrop-filter: blur(0px) saturate(144%);
  -webkit-backdrop-filter: blur(0px) saturate(144%);
  background-color: ${({ selectedDay }) =>
    selectedDay ? "red" : "rgba(106, 175, 235, 0.36)"};
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.xs};
  font-weight: 400;
  cursor: pointer;
  img {
    align-self: center;
    justify-self: center;
  }
  h4 {
    text-align: center;
    font-weight: 400;
  }
  h4::first-letter {
    text-transform: capitalize;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
