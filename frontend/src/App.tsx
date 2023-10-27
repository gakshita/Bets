import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { LayoutStyle, MainScreenStyle } from "./style";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import CoinFlip from "@Views/CoinFlip";
import MegaDice from "@Views/MegaDice";
import { GlobalProvider } from "./context/GlobalContext";
function App() {
    const [currentTheme, setCurrentTheme] = useState("dark");

    return (
        <GlobalProvider>
            <ThemeProvider theme={theme[currentTheme as keyof typeof theme]}>
                <div>
                    <LayoutStyle>
                        <Sidebar></Sidebar>
                        <MainScreenStyle>
                            <Navbar />
                            <CoinFlip />
                            {/* <MegaDice /> */}
                        </MainScreenStyle>
                    </LayoutStyle>
                </div>
            </ThemeProvider>
        </GlobalProvider>
    );
}

export default App;
