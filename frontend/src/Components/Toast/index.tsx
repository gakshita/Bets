import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./style";
import { ReactElement } from "react";

import {
    faFaceLaughWink,
    faFaceFrown
} from "@fortawesome/free-regular-svg-icons";
type ToastProps = {
    show: boolean;
    msg: string | ReactElement;
    type: string;
};

export const SuccessToast = (tokens: number): ReactElement => {
    return (
        <div className="toast-msg success">
            <div>You won!</div>
            <div className="green">+{tokens} DEMO</div>
            <div className="small-txt">It will be deposited shortly</div>
        </div>
    );
};
export const FailureToast = (): ReactElement => {
    return (
        <div className="toast-msg failure">
            <div>Unfortunately you lost your last bet</div>
            <div className="small-txt">Try again</div>
        </div>
    );
};
const Toast: React.FC<ToastProps> = ({ show, msg, type }) => {
    console.log(show, msg, type);
    return (
        <Container>
            <div
                id="toast"
                className={`${type == "success" ? "success" : "failure"}`}
            >
                <div className="toast-icon">
                    {type == "success" ? (
                        <FontAwesomeIcon
                            icon={faFaceLaughWink}
                            className="icon"
                        />
                    ) : (
                        <FontAwesomeIcon icon={faFaceFrown} className="icon" />
                    )}
                </div>
                {msg}
            </div>
        </Container>
    );
};

export default Toast;
