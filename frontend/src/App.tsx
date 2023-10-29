import { useState } from "react";
import "./App.css";
import CoinFlip from "@Views/CoinFlip";
import MegaDice from "@Views/MegaDice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
function App() {
    const [currentTheme, setCurrentTheme] = useState("dark");

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Layout currentTheme={currentTheme} />}
                >
                    <Route path="coin-flip" element={<CoinFlip />} />
                    <Route path="mega-dice" element={<MegaDice />} />

                    <Route index element={<CoinFlip />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
