import styled, { css } from "styled-components";
export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 0 20px;
    color: ${({ theme }) => theme.color.text_1};

    .top-section {
        margin: 50px 100px 100px;
    }
    .coin {
        img {
            height: 310px;
            max-width: 409px;
        }
        margin-bottom: 30px;
    }
    .coins_sm {
        width: 50px;
        height: 50px;
        margin: 2px;
        margin-top: 16px;
        cursor: pointer;
        opacity: 0.2;
        transition: opacity 0.3s ease-in-out;
    }
    .selected {
        opacity: 1;
    }
    .is-flipped {
        transform: translateX(-100%) rotateY(-180deg);
    }

    .coin-selection {
        flex: 2.5;
        margin-right: 32px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        div:not(:last-child) {
            margin-right: 10px;
        }
        .box3 {
            margin: 10px auto !important;
        }
    }
    .bet-box {
        flex: 1;
        margin-left: 20px;

        div:not(:last-child) {
            margin-bottom: 10px;
        }
        .stats {
            position: relative;
            flex: 1;
        }
        .stats:not(:last-child)::after {
            content: "";
            position: absolute;
            bottom: 0;
            height: 50px;
            bottom: 2px;
            border-radius: 4px;
            width: 1px;
            background-color: ${({ theme }) => theme.color.text_2};
            right: 15px;
            opacity: 0.3;
        }
        input {
            background-color: ${({ theme }) => theme.color.background_3};
            padding: 10px;
            font-weight: 600;
            border-radius: 7px;
            font-size: ${({ theme }) => theme.fontSize.sm};
            margin: 0 5px;
            width: 100%;
            font-family: "Rubik";
        }
    }
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;

    .double {
        flex: 2;
    }
    .flex-start {
        justify-content: flex-start;
    }
`;

export const Box1 = styled.div`
    background-color: ${({ theme }) => theme.color.background_6};
    border-radius: 16px;
    padding: 16px;
`;
export const Box2 = styled.div`
    background-color: ${({ theme }) => theme.color.background_3};
    border-radius: 16px;
    padding: 16px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.sm};
    display: flex;
    flex-direction: column;
    padding-bottom: 25px;

    .full-height {
        flex: 1;
    }

    .align-start {
        align-items: baseline;
    }
    .disabled {
        color: ${({ theme }) => theme.color.text_2};
        pointer-events: none;
    }
    .error {
        color: ${({ theme }) => theme.color.text_2};
        font-weight: 500;
    }
`;

export const Box3 = styled.div`
    align-items: flex-start;

    background-color: ${({ theme }) => theme.color.background_3};
    border-radius: 16px;
    padding: 5px 16px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    margin-bottom: 0px !important;
    margin-right: 0px !important;
    width: fit-content;
`;

export const Text = styled.div`
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.sm};
    margin-right: 0px !important;
    opacity: 0.8;
`;

export const Text2 = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xxxl};
`;

export const Coin = styled.div`
    position: relative;
    margin: 0 auto;

    img {
        height: 310px;
        max-width: 409px;
    }

    #coin {
        // position: relative;
        margin: 0 auto;
        // width: 100px;
        // height: 100px;
        cursor: pointer;
    }
    #coin div {
        width: 100%;
        height: 100%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }

    #coin {
        transition: -webkit-transform 1s ease-in;
        -webkit-transform-style: preserve-3d;
    }
    #coin div {
        position: absolute;
        -webkit-backface-visibility: hidden;
        bottom: 157px;
    }
    .side-a {
        z-index: 100;
        right: 100px;
    }
    .side-b {
        -webkit-transform: rotateY(-180deg);
        right: -84px;
    }

    #coin.heads {
        -webkit-animation: flipHeads 3s ease-out forwards;
        -moz-animation: flipHeads 3s ease-out forwards;
        -o-animation: flipHeads 3s ease-out forwards;
        animation: flipHeads 3s ease-out forwards;
    }
    #coin.tails {
        -webkit-animation: flipTails 3s ease-out forwards;
        -moz-animation: flipTails 3s ease-out forwards;
        -o-animation: flipTails 3s ease-out forwards;
        animation: flipTails 3s ease-out forwards;
    }

    @-webkit-keyframes flipHeads {
        from {
            -webkit-transform: rotateY(0);
            -moz-transform: rotateY(0);
            transform: rotateY(0);
        }
        to {
            -webkit-transform: rotateY(1800deg);
            -moz-transform: rotateY(1800deg);
            transform: rotateY(1800deg);
        }
    }
    @-webkit-keyframes flipTails {
        from {
            -webkit-transform: rotateY(0);
            -moz-transform: rotateY(0);
            transform: rotateY(0);
        }
        to {
            -webkit-transform: rotateY(1980deg);
            -moz-transform: rotateY(1980deg);
            transform: rotateY(1980deg);
        }
    }
`;
