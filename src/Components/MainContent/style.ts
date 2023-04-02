import styled from "styled-components";

export const MainContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  border: 1px solid ${({ theme }) => theme.colors.blue5};
  outline: none;
  width: 80%;
  padding: ${({ theme }) => theme.padding.s};
  border-radius: ${({ theme }) => theme.padding.s};
  color: ${({ theme }) => theme.colors.blue5};
  margin: ${({ theme }) => theme.padding.s};
  background-color: ${({ theme }) => theme.colors.transparentBlue};
  min-height: 300px;
  margin-top: ${({ theme }) => theme.margin.xl};
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CurrentWheater = styled.div`
  display: flex;
  align-items: start;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 400;
  }
  span,
  p {
    padding-top: ${({ theme }) => theme.padding.s};
    margin-left: ${({ theme }) => theme.margin.s};
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
