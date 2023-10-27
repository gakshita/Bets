import { ButtonStyle } from "./style";
import React, { useTheme } from "styled-components";

const Button: React.FC = ({
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
            fontSize={theme.fontSize[fontSize]}
            height={height}
            onClick={() => func()}
            disabled={disabled}
        >
            {text}
        </ButtonStyle>
    );
};
export default Button;
