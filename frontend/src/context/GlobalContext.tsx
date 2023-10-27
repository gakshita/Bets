import { useReducer, createContext, ReactElement, useContext } from "react";

type StateType = {
    tokens: number;
};
type ReducerAction = {
    type: REDUCER_ACTION_TYPES;
    payload?: any;
};
type childrenType = {
    children?: ReactElement | undefined;
};

const DEFAULT_TOKENS = 1000000;

const initial_state: StateType = {
    tokens: localStorage.getItem("tokens")
        ? JSON.parse(localStorage.getItem("tokens")!)
        : 1000000
};

const enum REDUCER_ACTION_TYPES {
    REFILL_TOKENS = "REFILL_TOKENS",
    SET_TOKENS = "SET_TOKENS"
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPES.REFILL_TOKENS:
            console.log("refill");
            localStorage.setItem("tokens", JSON.stringify(DEFAULT_TOKENS));
            return {
                ...state,
                tokens: DEFAULT_TOKENS
            };
        case REDUCER_ACTION_TYPES.SET_TOKENS:
            console.log("heyyy", action.payload);
            localStorage.setItem("tokens", JSON.stringify(action.payload));
            return {
                ...state,
                tokens: action.payload
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
