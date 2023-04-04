import styled from "styled-components";

export const MainContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  border: 1px solid ${({ theme }) => theme.colors.blue5};
  outline: none;
  width: 100%;
  padding: ${({ theme }) => theme.padding.s};
  border-radius: ${({ theme }) => theme.padding.s};
  color: ${({ theme }) => theme.colors.blue5};
  margin: ${({ theme }) => theme.padding.s};
  background-color: ${({ theme }) => theme.colors.transparentBlue};
  min-height: 300px;
  margin-top: ${({ theme }) => theme.margin.xl};
  align-content: center;
  flex-direction: column;
  display: flex;
  h2 {
    text-align: center;
  }
`;

export const Box = styled.div`
  margin-top: ${({ theme }) => theme.padding.l};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  width: 100%;
  max-width: 900px;
  align-self: center;
`;
