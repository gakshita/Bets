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
    .table {
        background-color: ${({ theme }) => theme.color.background_5};
        width: 100%;
        min-height: 100px;
        max-height: 500px;
        border-radius: 21px;
        * {
            border: none;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */

        .th {
            background-color: ${({ theme }) => theme.color.background_4};
            border: none;
            position: sticky;
            top: 0;
            .tc {
                color: ${({ theme }) => theme.color.text_2};

                font-weight: 600;
                font-size: 16px;
            }
            .tr {
                background-color: ${({ theme }) => theme.color.background_4};
                border: none;
            }
        }
        .tb {
            .tr {
                font-weight: 600;
                font-size: 14px;
                color: ${({ theme }) => theme.color.text_1};
                // text-transform: capitalize;
                border: none;
            }
            .player {
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 129%;
                text-decoration: none;
                white-space: nowrap;
                margin: 0;
                border: none;
                transition: color 0.3s ease-in;
                color: ${({ theme }) => theme.color.text_3};
            }
            .coin_side {
                // display: flex;

                img {
                    // margin: auto 0;
                }
            }
        }
    }
    .table::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .table {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`;

export const TableStyle = styled.div``;
