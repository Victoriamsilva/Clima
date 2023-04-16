import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  align-self: end;
  width: 100%;
  animation: tam 0.5s linear forwards;
  animation-delay: 0.9s;
  transform: translateY(-20px);
  opacity: 0;

  @media screen and (${({ theme }) => theme.devices.mobileXL}) {
    gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  }

  @media screen and (${({ theme }) => theme.devices.mobileXXS}) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  }
`;

export const BoxEmptyLocation = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.xl};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: tam 0.5s linear forwards;
  transform: translateY(-20px);
  opacity: 0;
  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.l};
  }
`;

export const Box = styled.div`
  flex-grow: 1;
  overflow: hidden auto;
  margin-top: ${({ theme }) => theme.spacing.l};
  padding: ${({ theme }) => "0 " + theme.spacing.l + " " + theme.spacing.xl};
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 400;
    margin-bottom: ${({ theme }) => theme.spacing.m};
    animation: tam 0.5s linear forwards;
    animation-delay: 0.3s;
    transform: translateY(-20px);
    opacity: 0;
    position: relative;
  }

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    margin-top: 0;
    padding: ${({ theme }) => theme.spacing.l + " " + theme.spacing.xl};
  }

  @media screen and (${({ theme }) => theme.devices.mobileS}) {
    h3 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;

export const VideoBackground = styled.video`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  @media screen and (${({ theme }) => theme.devices.laptopL}) {
    max-width: 100vw;
  }
  @media screen and (${({ theme }) => theme.devices.laptop}) {
    max-width: 200vw;
  }
  @media screen and (${({ theme }) => theme.devices.tabletL}) {
    max-width: 250vw;
  }
  @media screen and (${({ theme }) => theme.devices.mobileXL}) {
    max-width: 700vw;
  }
`;
