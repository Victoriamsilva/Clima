import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 80px;
  max-width: 200px;
  border-left: 3px solid ${({ theme }) => theme.colors.blue5};
  border-bottom: 3px solid ${({ theme }) => theme.colors.blue5};

  border-radius: 15px;
  padding: ${({ theme }) => theme.padding.s};
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
