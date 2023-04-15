import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  margin: 0;
  position: relative;
  display: flex;
  max-height: 100vh;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    flex-direction: column;
  }
`;

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: aqua transparent;
  @keyframes tam {
    from {
      transform: translateY(-20px);
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(	51, 128, 198, 0.2);
  border-radius: 20px;
}

body {
  font-family: 'Ubuntu', sans-serif;
  scrollbar-width: thin;          /* "auto" or "thin" */
  scrollbar-color: blue orange;   /* scroll thumb and track */

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
