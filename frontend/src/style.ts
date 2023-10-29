import styled, { css } from "styled-components";

export const LayoutStyle = styled.div`
    display: flex;
    min-height: 100vh;
`;

export const MainScreenStyle = styled.div`
    flex: 8;
    background-color: ${({ theme }) => theme.color.background_2};
    .main-section {
        max-width: 1200px;
        position: relative;
        margin: 0 auto;
    }
`;

export const GreyBox = styled.div`
    // background-color: ${({ theme }) => theme.color.background_3};
    border-radius: 21px;
    width: 100%;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    justify-content: center;
    height: 500px;
    // padding: 50px 0;
    .coming-soon {
        color: ${({ theme }) => theme.color.text_2};

        flex-direction: column;
        margin: auto;
        display: flex;
        row-gap: 20px;
        text-align: center;
        .build {
            margin: auto;
        }
        .heading {
            line-height: 27px;
        }
        img {
            width: 300px;
            margin: auto;
        }
    }
`;
