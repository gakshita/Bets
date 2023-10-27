import { createContext, useState, useContext, ReactElement } from "react";
import Toast from "../Components/Toast";
type ToastType = {
    show: boolean;
    type: string;
    msg: string | ReactElement;
};
type ChildrenType = {
    children: React.ReactElement | undefined;
};
type StateType = {
    toast: ToastType;
    showToast: (
        show?: boolean,
        type?: string,
        msg?: string | ReactElement
    ) => void;
};
const initial_state: StateType = {
    toast: { show: false, type: "success", msg: "" },
    showToast: (show = false, type = "success", msg = "") => {}
};

const ToastContext = createContext<StateType>(initial_state);

export const ToastProvider = ({ children }: ChildrenType) => {
    const [toast, setToast] = useState<ToastType>({
        show: false,
        type: "success",
        msg: ""
    });
    const showToast = (
        show = false,
        type = "success",
        msg: string | ReactElement = ""
    ) => {
        setToast({ show, type, msg });
        document.getElementById("toast")?.classList.add("fade-in");

        setTimeout(() => {
            setToast({ show: false, type: "success", msg: "" });
            console.log(document.getElementById("toast"), document);
            console.log(document.querySelector("#coin"));
            document.getElementById("toast")?.classList.add("fade-out");
        }, 5000);
    };
    return (
        <ToastContext.Provider value={{ toast, showToast }}>
            {toast.show && (
                <Toast
                    show={toast.show}
                    type={toast.type}
                    msg={toast.msg}
                    // showToast={showToast}
                />
            )}
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};
