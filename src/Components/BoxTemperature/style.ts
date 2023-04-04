import styled from "styled-components";

export const BoxTemp = styled.div`
  display: flex;
  span:nth-child(even) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  span:nth-child(odd) {
    padding-top: ${({ theme }) => theme.padding.xs};
    margin-left: ${({ theme }) => theme.margin.xs};
    align-self: start;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  img {
    align-self: center;
    width: 20px;
    height: 20px;
    padding-top: ${({ theme }) => theme.padding.xs};
  }
`;
