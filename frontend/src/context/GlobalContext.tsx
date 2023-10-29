import {
    useReducer,
    createContext,
    ReactElement,
    useContext,
    useEffect
} from "react";
import axios from "axios";
type StateType = {
    tokens: number;
    user_id: string;
};
type ReducerAction = {
    type: REDUCER_ACTION_TYPES;
    payload?: any;
};
type childrenType = {
    children?: ReactElement | undefined;
};

const DEFAULT_TOKENS = 1000;

const initial_state: StateType = {
    tokens: localStorage.getItem("tokens")
        ? JSON.parse(localStorage.getItem("tokens")!)
        : 1000,
    user_id: ""
};

const enum REDUCER_ACTION_TYPES {
    REFILL_TOKENS = "REFILL_TOKENS",
    SET_TOKENS = "SET_TOKENS",
    SET_USER_ID = "SET_USER_ID"
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPES.REFILL_TOKENS:
            localStorage.setItem("tokens", JSON.stringify(DEFAULT_TOKENS));
            return {
                ...state,
                tokens: DEFAULT_TOKENS
            };
        case REDUCER_ACTION_TYPES.SET_TOKENS:
            localStorage.setItem("tokens", JSON.stringify(action.payload));
            return {
                ...state,
                tokens: action.payload
            };
        case REDUCER_ACTION_TYPES.SET_USER_ID:
            return {
                ...state,
                user_id: action.payload
            };
        default:
            return state;
    }
};

const useGloablContext = (initial_state: StateType) => {
    const [state, dispatch] = useReducer(reducer, initial_state);
    const refill_tokens = () => {
        dispatch({ type: REDUCER_ACTION_TYPES.REFILL_TOKENS });
    };
    const set_tokens = (tokens: Number) => {
        dispatch({ type: REDUCER_ACTION_TYPES.SET_TOKENS, payload: tokens });
    };

    const set_user_id = async () => {
        let res = await axios.get("https://api.ipify.org?format=json");
        dispatch({
            type: REDUCER_ACTION_TYPES.SET_USER_ID,
            payload: res.data.ip
        });
    };
    useEffect(() => {
        set_user_id();
    }, []);

    return { state, refill_tokens, set_tokens };
};

type GlobalContextType = ReturnType<typeof useGloablContext>;

const initial_context_state: GlobalContextType = {
    state: initial_state,
    refill_tokens: () => {},
    set_tokens: (tokens: Number) => {}
};
export const GlobalContext = createContext<GlobalContextType>(
    initial_context_state
);

export const GlobalProvider = ({ children }: childrenType) => {
    return (
        <GlobalContext.Provider value={useGloablContext(initial_state)}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useTokens = () => {
    const { state, refill_tokens, set_tokens } = useContext(GlobalContext);
    return { tokens: state.tokens, refill_tokens, set_tokens };
};

export const useUserId = () => {
    const { state } = useContext(GlobalContext);
    return { user_id: state.user_id };
};
