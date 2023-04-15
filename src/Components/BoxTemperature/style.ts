import styled from "styled-components";

export const BoxTemp = styled.div`
  display: flex;
  span:nth-child(even) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  span:nth-child(odd) {
    padding-top: ${({ theme }) => theme.spacing.xs};
    margin-left: ${({ theme }) => theme.spacing.xs};
    align-self: start;
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
  img {
    align-self: center;
    width: 20px;
    height: 20px;
    padding-top: ${({ theme }) => theme.spacing.xs};
  }
`;
