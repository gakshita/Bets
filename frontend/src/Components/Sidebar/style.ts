import styled, { css } from "styled-components";
export const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.color.background_1};
    padding: 16px 32px;

    .logo {
        color: ${({ theme }) => theme.color.primary};
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.md};
    }
    .tabs {
        margin-top: 80px;

        .tab {
            margin-top: 18px;
            color: ${({ theme }) => theme.color.text_2};
            cursor: pointer;
            .txt {
                font-weight: 600;
                line-height: 125%;
                font-size: ${({ theme }) => theme.fontSize.md};
                margin-left: 8px;
            }
        }
        .tab-active {
            color: ${({ theme }) => theme.color.text_1};
        }

        .tab:hover {
            color: ${({ theme }) => theme.color.text_1};
        }
    }
`;
