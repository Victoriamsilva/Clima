import styled from "styled-components";

export const Input = styled.input`
    background-color: transparent;
    font-size: ${({theme}) => theme.fontSize.m};
    border: 1px solid ${({theme}) => theme.colors.blue5};
    outline: none;
    width: 80%;
    height: 30px;
    padding: ${({theme}) => theme.padding.s};
    border-radius: ${({theme}) => theme.padding.s};
    color: ${({theme}) => theme.colors.blue5};
    margin: ${({theme}) => theme.padding.s};
    background-color: ${({theme}) => theme.colors.transparentBlue}
`;