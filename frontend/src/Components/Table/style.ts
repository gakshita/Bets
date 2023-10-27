import styled, { css } from "styled-components";
export const Container = styled.div`
    .heading {
        font-size: ${({ theme }) => theme.fontSize.xxxl};
        font-weight: 600;
        font-family: "Rubik";
        color: ${({ theme }) => theme.color.text_1};
        margin-bottom: 24px;
        position: relative;
    }
    .heading::after {
        content: "";
        position: absolute;
        bottom: 0;
        height: 5px;
        bottom: -10px;

        border-radius: 4px;
        width: 28px;
        background-color: ${({ theme }) => theme.color.primary};
        left: 0px;
        right: 0px;
    }
`;

export const TableStyle = styled.div`
    background-color: ${({ theme }) => theme.color.background_5};
    width: 100%;
    min-height: 100px;
    border-radius: 21px;
    margin-top: 35px;
    .tr {
        background-color: ${({ theme }) => theme.color.background_4};
    }
`;
