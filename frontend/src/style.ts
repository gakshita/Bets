import styled, { css } from "styled-components";

export const LayoutStyle = styled.div`
    display: flex;
    height: 100vh;
`;

export const MainScreenStyle = styled.div`
    flex: 8;
    background-color: ${({ theme }) => theme.color.background_2};
`;
