import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiceTwo,
    faCoins,
    faThumbsDown
} from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
    return (
        <Container>
            <div className="logo">Logo</div>
            <div className="tabs">
                <div className="tab">
                    <FontAwesomeIcon icon={faDiceTwo} size="xl" />{" "}
                    <span className="txt">Mega Dice</span>
                </div>
                <div className="tab">
                    <FontAwesomeIcon icon={faCoins} size="xl" />{" "}
                    <span className="txt">Coin Flip</span>
                </div>
            </div>
        </Container>
    );
};

export default Sidebar;
