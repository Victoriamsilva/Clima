import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2px;
  align-self: end;
  width: 100%;
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

export const VideoBackground = styled.video`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  max-width: 100vw;
`;
