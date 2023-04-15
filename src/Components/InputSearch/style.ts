import styled from "styled-components";

export const Box = styled.div<{ isSearching?: boolean }>`
  position: relative;
  width: 100%;
  img {
    position: absolute;
    top: ${({ isSearching }) => (isSearching ? "8px" : "5px")};
    left: 3px;
    animation: ${({ isSearching }) =>
      isSearching ? "spinner .6s linear infinite" : "none"};
  }

  animation: tam 0.5s linear forwards;
  animation-delay: 0.3s;
  transform: translateY(-20px);
  z-index: 1;
  opacity: 0;
  /* -webkit-animation-fill-mode: initial;
    animation-fill-mode: initial; */

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Input = styled.input<{ hasResult?: boolean }>`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.s};
  padding-left: 26px;
  height: 30px;
  border-radius: ${({ hasResult }) => (hasResult ? "6px 6px 0 0" : "6px")};
  background-color: ${({ theme }) => theme.colors.glass};
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.xs};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border.white};
  color: ${({ theme }) => theme.colors.white};
  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const List = styled.div`
  position: absolute;
  border-radius: 0 0 6px 6px;
  background-color: #59677e;
  width: 100%;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};
  span {
    font-size: ${({ theme }) => theme.fontSize.xs};
    max-width: 100%;
    text-overflow: ellipsis;
  }
  div {
    max-width: 100%;
    overflow: hidden;
    display: flex;
    border-top: 1px solid ${({ theme }) => theme.border.glass};
    padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.m}`};
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.colors.glassSelected};
    }
  }
`;
