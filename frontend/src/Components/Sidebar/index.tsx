import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiceTwo,
    faCoins,
    faThumbsDown
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const loc = useLocation();
    return (
        <Container>
            <div className="logo">
                <img src="/Bets.png"></img>
            </div>
            <div className="tabs">
                <div
                    className={`tab ${
                        loc.pathname == "/mega-dice" && "selected"
                    }`}
                    onClick={() => navigate("mega-dice")}
                >
                    <FontAwesomeIcon icon={faDiceTwo} size="xl" />{" "}
                    <span className="txt">Mega Dice</span>
                </div>
                <div
                    className={`tab ${
                        (loc.pathname == "/coin-flip" || loc.pathname == "/") &&
                        "selected"
                    }`}
                    onClick={() => navigate("coin-flip")}
                >
                    <FontAwesomeIcon icon={faCoins} size="xl" />{" "}
                    <span className="txt">Coin Flip</span>
                </div>
            </div>
        </Container>
    );
};

export default Sidebar;
