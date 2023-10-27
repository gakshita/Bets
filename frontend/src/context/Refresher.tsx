import React, {
    createContext,
    ReactElement,
    useContext,
    useEffect,
    useState
} from "react";
import { createLogger } from "vite";

const FAST_REFRESH_INTERVAL = 5000;
const SLOW_REFRESH_INTERVAL = 5000;
type StateType = {
    fast: number;
    slow: number;
    refresh: number;
    forceRefresh: () => void;
};
const initial_state: StateType = {
    slow: 0,
    fast: 0,
    refresh: 0,
    forceRefresh: () => {}
};
const RefresherContext = createContext<StateType>(initial_state);

type childrenType = {
    children: ReactElement | undefined;
};
export const RefresherProvider = ({ children }: childrenType) => {
    const [fast, setFast] = useState(0);
    const [slow, setSlow] = useState(0);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        console.log("refresher");
        const fInterval = setInterval(() => {
            console.log("fast");
            setFast((val) => val + 1);
        }, FAST_REFRESH_INTERVAL);

        const sInterval = setInterval(() => {
            setSlow((val) => val + 1);
        }, SLOW_REFRESH_INTERVAL);
        return () => {
            clearInterval(fInterval);
            clearInterval(sInterval);
        };
    }, []);
    return (
        <RefresherContext.Provider
            value={{
                fast,
                slow,
                refresh,
                forceRefresh: () => {
                    setRefresh((val) => val + 1);
                }
            }}
        >
            {children}
        </RefresherContext.Provider>
    );
};

export const useRefresher = () => {
    const { fast, slow, refresh, forceRefresh } = useContext(RefresherContext);
    return {
        fastRefresher: fast,
        slowRefresher: slow,
        refresh,
        forceRefresh
    };
};
