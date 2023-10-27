import styled, { css } from "styled-components";

export const ButtonStyle = styled.div`
    background: ${({ theme }) => theme.color.primary};

    display: flex;
    position: relative;
    font-family: "Rubik";
    font-weight: 600;
    color: ${({ theme }) => theme.color.text_1};
    border-radius: 12px;
    border: none;
    box-sizing: border-box;
    padding: 7px 12px;
    width: ${(props) => (props.width ? props.width : "fit-content")};
    cursor: pointer;
    font-size: ${(props) => props.fontSize};
    justify-content: center;
    height: ${(props) => props.height};
    align-items: center;
`;
