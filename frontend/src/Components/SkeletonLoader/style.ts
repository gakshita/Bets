import styled from "styled-components";

export const TableStyle = styled.div`
    width: 100%;
    .tableSkeleton {
        background-color: ${({ theme }) => theme.color.background_3};
        min-height: 200px;
        max-height: 500px;
        border-radius: 21px;
    }
`;
