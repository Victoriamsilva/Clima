import styled from "styled-components";

export const Dropdown = styled.div<{ open: boolean }>`
  position: fixed;
  top: 8px;
  right: 8px;
  display: flex;
  cursor: pointer;
  animation: tam 0.5s linear forwards;
  animation-delay: 0.2s;
  transform: translateY(-20px);
  opacity: 0;
  .arrowUp {
    transition: all 0.3s ease-in-out;
    transform: rotate(180deg);
  }
  .arrowDown {
    transition: all 0.3s ease-in-out;
    transform: rotate(0deg);
  }
`;

export const DropdownContent = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  background-color: #59677e;
  z-index: 2;
  width: 100%;
  border-radius: 6px;
  margin-top: 20px;
  li {
    justify-content: center;
    display: flex;
    list-style-type: none;
    cursor: pointer;
    border-radius: 6px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    &:hover {
      background-color: ${({ theme }) => theme.colors.glassSelected};
    }
  }
`;
