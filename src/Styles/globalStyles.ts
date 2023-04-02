import styled, { createGlobalStyle } from 'styled-components'
import Rain from '../Assets/Pattern/Rain.svg'


export const Container = styled.div`
    padding: ${({ theme }) => theme.padding.xl} !important;
    margin: 0;
    display: flex;
    max-height: 100vh;
    max-width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    flex-direction: column;
`;


export const ImageBackground = styled.div`
    background-image: url(${Rain});
    opacity: 0.1;
    position: absolute;
    height: 100vh;
    width: 100vw;

`

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Ubuntu', sans-serif;
}
`;