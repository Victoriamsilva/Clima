import styled from "styled-components";

export const MainContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  border: 1px solid ${({ theme }) => theme.border.white};
  background: ${({ theme }) => theme.colors.glass};
  outline: none;
  padding: ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.colors.white};
  margin: ${({ theme }) => theme.spacing.l} 0;
  min-height: 300px;
  align-content: center;
  flex-direction: column;
  display: flex;
  h2 {
    text-align: center;
  }
`;

export const Box = styled.div`
  margin-top: ${({ theme }) => theme.spacing.l};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  width: 100%;
  align-self: center;

  @media screen and (${({ theme }) => theme.devices.mobileL}) {
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  }
`;
