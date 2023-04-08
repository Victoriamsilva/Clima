import styled from "styled-components";

export const CurrentWeatherBox = styled.div`
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  border-right: 1px solid ${({ theme }) => theme.border.white};

  padding: ${({ theme }) => theme.spacing.l + " " + theme.spacing.xl};
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    width: 100%;
    flex-direction: column-reverse;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.border.white};
  }
`;

export const Content = styled.div`
  color: white;
  text-align: center;
  justify-items: center;
  div div {
    display: flex;
    padding-top: ${({ theme }) => theme.spacing.l};
    h1 {
      align-self: center;
      font-size: ${({ theme }) => theme.fontSize.xxl};
      font-weight: 400;
    }
    span {
      padding-top: ${({ theme }) => theme.spacing.s};
      margin-left: ${({ theme }) => theme.spacing.s};
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }

  p {
    align-self: center;

    padding-top: ${({ theme }) => theme.spacing.l};
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.l};
    display: flex;
    div {
      display: flex;
    }
    div div {
      padding-top: 0;
      h1 {
        font-size: ${({ theme }) => theme.fontSize.s};
        font-weight: 400;
      }
      span {
        align-self: center;
        padding-top: ${({ theme }) => theme.spacing.xxs};
        margin-left: ${({ theme }) => theme.spacing.xs};
        font-size: ${({ theme }) => theme.fontSize.xxs};
      }
    }

    p {
      padding: 0 5px;
      font-size: ${({ theme }) => theme.fontSize.s};
    }

    img {
      width: 20px;
    }
  }
  .wind {
    display: none;
  }
  @media screen and (${({ theme }) => theme.devices.mobileL}) {
    flex-direction: column;
  }
  @media screen and (${({ theme }) => theme.devices.mobileS}) {
    p,
    span,
    div div h1 {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
    div div span {
      font-size: ${({ theme }) => theme.fontSize.xxs};
    }
  }
`;
