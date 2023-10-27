import styled, { css } from "styled-components";
export const Container = styled.div`
    .box {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 52px 0 20px;
    }
    .heading {
        font-size: ${({ theme }) => theme.fontSize.xxxl};
        font-weight: 600;
        font-family: "Rubik";
        color: ${({ theme }) => theme.color.text_1};

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
    .header {
        display: flex;
        color: ${({ theme }) => theme.color.text_1};
        font-size: ${({ theme }) => theme.fontSize.sm};
        justify-content: space-between;
        .right {
            display: flex;
        }

        .center {
            margin: auto 10px;
            cursor: pointer;
        }
        .tokens {
            background-color: ${({ theme }) => theme.color.background_3};
            padding: 4px 10px 4px 6px;
            border-radius: 12px;
            box-sizing: border-box;
            margin-right: 8px;
            align-items: center;
            display: flex;
            img {
                width: 18px;
                height: 18px;
                margin-right: 8px;
            }
            span {
                font-weight: 500;
            }
        }
    }
`;
