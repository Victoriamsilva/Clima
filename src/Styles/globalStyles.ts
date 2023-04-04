import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.padding.xl} !important;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Ubuntu', sans-serif;
  background-color: $;

}
`;

export const Icon = styled.img<{ size?: string }>`
  width: ${({ size }) => size || "40px"};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  align-self: end;
  width: 100%;
`;
