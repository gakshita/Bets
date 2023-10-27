import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from{
    transform:translateX(150%);

}
to{
    transform:translateX(0%);
}
`;
const fadeOut = keyframes`
from{
    transform:translateX(0%);
}
to{
    transform:translateX(150%);
}
`;
export const Container = styled.div`
    position: absolute;
    right: 0;
    // transition: all 1.5s linear;
    .fade-in {
        animation: ${fadeIn} 500ms ease;
    }
    .fade-out {
        animation: ${fadeOut} 500ms ease;
    }
    #toast {
        background-color: ${({ theme }) => theme.color.background_3};
        width: fit-content;
        border-radius: 10px;
        display: flex;
        column-gap: 15px;
        padding: 10px 20px;
        max-width: 220px;
        color: ${({ theme }) => theme.color.text_1};
        font-weight: 500;
        box-shadow: rgb(56 76 95 / 20%) 0px 8px 24px;
    }
    .toast-msg {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }
    .green {
        color: ${({ theme }) => theme.color.green};
        font-size: 16px;
        // line-height: 26px;
    }
    .small-txt {
        font-size: 14px;
        color: ${({ theme }) => theme.color.text_4};
    }

    .toast-icon {
        .icon {
            width: 25px;
            height: 25px;
        }
    }
`;
