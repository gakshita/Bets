import styled, { css } from "styled-components";
export const Container = styled.div`
    .box {
        width: 100%;
        max-width: 892px;
        margin: 0 auto;
        padding: 52px 0 20px;
    }
    .header {
        display: flex;
        color: ${({ theme }) => theme.color.text_1};
        font-size: ${({ theme }) => theme.fontSize.sm};
        justify-content: flex-end;

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
