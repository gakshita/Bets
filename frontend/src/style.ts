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
