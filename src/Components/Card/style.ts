import styled from "styled-components";

interface CardProps {
  selectedDay: boolean;
}

export const Card = styled.div<CardProps>`
  width: 100%;
  background: ${({ selectedDay, theme }) =>
    selectedDay ? theme.colors.glassSelected : theme.colors.glass};
  border: 1px solid ${({ theme }) => theme.border.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.m};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  img {
    align-self: center;
    justify-self: center;
  }
  h4 {
    text-align: center;
    font-weight: 400;
    margin-bottom: ${({ theme }) => theme.spacing.m};
  }
  h4::first-letter {
    text-transform: capitalize;
  }
  @media screen and (${({ theme }) => theme.devices.mobileXL}) {
    border-radius: 0;
    h4 {
      margin: 0;
    }
    img {
      width: 20px;
    }
    &:first-of-type {
      border-radius: 12px 0 0 12px;
    }

    &:last-of-type {
      border-radius: 0 12px 12px 0;
    }
  }

  @media screen and (${({ theme }) => theme.devices.mobileL}) {
    &:first-of-type {
      border-radius: 12px 0 0 0;
    }

    &:nth-of-type(6) {
      border-radius: 0 12px 12px 0;
    }

    &:last-of-type {
      border-radius: 0 0 12px 12px;
    }
  }

  @media screen and (${({ theme }) => theme.devices.mobileM}) {
    &:nth-of-type(5) {
      border-radius: 0 12px 12px 0;
    }

    &:nth-of-type(6) {
      border-radius: 0 0 0 12px;
    }

    &:last-of-type {
      border-radius: 0 0 12px 0;
    }
  }

  @media screen and (${({ theme }) => theme.devices.mobileS}) {
    &:nth-of-type(4) {
      border-radius: 0 12px 12px 0;
    }

    &:nth-of-type(5) {
      border-radius: 0 0 0 12px;
    }

    &:nth-of-type(6) {
      border-radius: 0;
    }
  }

  @media screen and (${({ theme }) => theme.devices.mobileXS}) {
    &:nth-of-type(3) {
      border-radius: 0 12px 0 0;
    }
    &:nth-of-type(4),
    &:nth-of-type(5) {
      border-radius: 0;
    }

    &:nth-of-type(6) {
      border-radius: 0 0 12px 0;
    }

    &:nth-of-type(7) {
      border-radius: 0 0 12px 12px;
    }
  }

  @media screen and (${({ theme }) => theme.devices.mobileXXXS}) {
    &:nth-of-type(2) {
      border-radius: 0 12px 0 0;
    }
    &:nth-of-type(3) {
      border-radius: 0;
    }
  }
`;

export const Box = styled.div`
  margin-top: ${({ theme }) => theme.spacing.m};
  display: flex;
  justify-content: space-between;

  @media screen and (${({ theme }) => theme.devices.mobileXL}) {
    display: none;
  }
`;
