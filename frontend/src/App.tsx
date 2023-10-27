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
import { RefresherProvider } from "./context/Refresher";
import { ToastProvider } from "./context/Toast";
function App() {
    const [currentTheme, setCurrentTheme] = useState("dark");

    return (
        <GlobalProvider>
            <RefresherProvider>
                <ThemeProvider
                    theme={theme[currentTheme as keyof typeof theme]}
                >
                    <div>
                        <LayoutStyle>
                            <Sidebar></Sidebar>
                            <MainScreenStyle>
                                <Navbar />
                                <div className="main-section">
                                    <ToastProvider>
                                        <CoinFlip />
                                        {/* <MegaDice /> */}
                                    </ToastProvider>
                                </div>
                            </MainScreenStyle>
                        </LayoutStyle>
                    </div>
                </ThemeProvider>
            </RefresherProvider>
        </GlobalProvider>
    );
}

export default App;
