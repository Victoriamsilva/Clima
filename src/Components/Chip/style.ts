import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 80px;
  max-width: 230px;
  border-left: 3px solid ${({ theme }) => theme.colors.white};
  border-bottom: 3px solid ${({ theme }) => theme.colors.glass};

  border-radius: 15px;
  padding: ${({ theme }) => theme.spacing.s};
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
