import { useState } from "react";
import "./App.css";
import CoinFlip from "@Views/CoinFlip";
// import MegaDice from "@Views/MegaDice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { lazy, Suspense } from "react";

const MegaDice = lazy(() => import("@Views/MegaDice"));
function App() {
    const [currentTheme, setCurrentTheme] = useState("dark");

    return (
        <Routes>
            <Route path="/" element={<Layout currentTheme={currentTheme} />}>
                <Route path="coin-flip" element={<CoinFlip />} />
                <Route
                    path="mega-dice"
                    element={
                        <Suspense fallback={<></>}>
                            <MegaDice />
                        </Suspense>
                    }
                />

                <Route index element={<CoinFlip />} />
            </Route>
        </Routes>
    );
}

export default App;
