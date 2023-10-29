import { Container } from "./style";
import Button from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useTokens } from "src/context/GlobalContext";

import { useLocation } from "react-router-dom";
const Navbar: React.FC = () => {
    const location = useLocation();

    const { tokens, refill_tokens, set_tokens } = useTokens();

    const getHeading = () => {
        if (location.pathname == "/") return "Coin Flip";
        const heading = location.pathname.slice(1).split("-");
        return `${heading[0]} ${heading[1]}`;
    };
    return (
        <Container>
            <div className="box">
                <div className="header">
                    <div className="heading">{getHeading()}</div>
                    <div className="right">
                        <FontAwesomeIcon
                            icon={faArrowRotateRight}
                            className="center"
                            onClick={() => refill_tokens()}
                        />
                        <div className="tokens">
                            <img src="/token.png" alt="" />
                            <span>{tokens.toFixed(2)} DEMO</span>
                        </div>
                        <Button text="Connect" func={() => {}}></Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
