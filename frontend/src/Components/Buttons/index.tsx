import { ButtonStyle } from "./style";
import React, { useTheme } from "styled-components";

type ButtonProps = {
    width?: string;
    fontSize?: string;
    height?: string;
    text: string;
    func: () => void;
    disabled?: boolean;
};
const Button: React.FC<ButtonProps> = ({
    width,
    fontSize,
    height,
    text,
    func,
    disabled
}) => {
    const theme = useTheme();
    return (
        <ButtonStyle
            className={`${disabled && "custom-disabled"}`}
            width={width}
            fontSize={fontSize ? theme.fontSize[fontSize] : "14px"}
            height={height}
            onClick={() => func()}
            disabled={disabled}
        >
            {text}
        </ButtonStyle>
    );
};
export default Button;
