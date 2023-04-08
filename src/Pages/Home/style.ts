import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  align-self: end;
  width: 100%;

  @media screen and (${({ theme }) => theme.devices.mobileXL}) {
    gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  }

  @media screen and (${({ theme }) => theme.devices.mobileXXS}) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  }
`;

export const Box = styled.div`
  flex-grow: 1;
  overflow: hidden auto;
  padding: ${({ theme }) => theme.spacing.l + " " + theme.spacing.xl};
`;

export const VideoBackground = styled.video`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  /* max-width: 100vw; */
`;
