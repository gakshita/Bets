const darktheme = {
    primary: "#c762f4",
    secondary: "#f3f3f3",
    border: "#e0e0e0",
    text: "#fff",
    background_1: "#13151b",
    background_2: "#171821",
    background_3: "#21222d",
    background_4: "#2a2c3c",
    background_5: "#21222d",
    background_6: "#242632",
    indicator: "#FFCC00",
    text_1: "#fff",
    text_2: "#7f8083"
};

const lightTheme = {
    primary: "#003366",
    secondary: "#eee",
    border: "#878787",
    text: "#000",
    background: "antiquewhite",
    indicator: "#ccc"
};

const defaultTheme = {
    fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xxxl: "24px"
    },
    borderRadius: {
        small: "5px",
        medium: "10px",
        large: "15px",
        circle: "50%"
    }
};

const theme = {
    dark: {
        color: darktheme,
        ...defaultTheme
    },
    light: {
        color: lightTheme,
        ...defaultTheme
    }
};

export default theme;
