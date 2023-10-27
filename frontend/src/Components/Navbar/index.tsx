import { Container } from "./style";
import Button from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useTokens } from "src/context/GlobalContext";
import { useToast } from "src/context/Toast";
import { SuccessToast, FailureToast } from "src/Components/Toast";

const Navbar: React.FC = () => {
    const { tokens, refill_tokens, set_tokens } = useTokens();
    const { showToast } = useToast();

    return (
        <Container>
            <div className="box">
                <div className="header">
                    <div className="heading">Coin Flip</div>
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
                        <Button text="Connect"></Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
