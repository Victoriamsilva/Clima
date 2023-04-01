import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
    padding: ${props => props.theme.padding.l};
    margin: 0
`;

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;