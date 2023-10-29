import { Container } from "./style";
import Table from "../../Components/Table";
import { GreyBox } from "src/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiceTwo,
    faCoins,
    faPersonDigging
} from "@fortawesome/free-solid-svg-icons";
const MegaDice: React.FC = () => {
    return (
        <Container>
            <GreyBox>
                <div className="coming-soon ">
                    <img src="/wipp.svg" alt="" />

                    <div className="heading">
                        Cool stuff comig your way soon. <br /> Stay tuned!
                    </div>
                </div>
            </GreyBox>
            {/* <Table /> */}
        </Container>
    );
};
export default MegaDice;
