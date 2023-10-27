import { Container } from "./style";
import Button from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useTokens } from "src/context/GlobalContext";
const Navbar: React.FC = () => {
    const { tokens, refill_tokens, set_tokens } = useTokens();

    return (
        <Container>
            <div className="box">
                <div className="header">
                    <FontAwesomeIcon
                        icon={faArrowRotateRight}
                        className="center"
                        onClick={() => refill_tokens()}
                    />
                    <div className="tokens">
                        <img src="/token.png" alt="" />
                        <span>{tokens.toFixed(2)} Tokens</span>
                    </div>
                    <Button text="Connect"></Button>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
