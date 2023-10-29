import { useEffect, useState } from "react";
import axios from "axios";
import { useTokens, useUserId } from "src/context/GlobalContext";
import { BASEURL } from "src/config";
import { useRefresher } from "src/context/Refresher";
import { useToast } from "src/context/Toast";
import { SuccessToast, FailureToast } from "src/Components/Toast";

export const useFunctionality = () => {
    const [coinSide, setCoinSide] = useState("heads");
    const [betSize, setBetSize] = useState(0.1);
    const [processing, setProcessing] = useState(false);
    const { tokens, refill_tokens, set_tokens } = useTokens();
    const { user_id } = useUserId();
    const { forceRefresh } = useRefresher();
    const { showToast } = useToast();

    const [trades, setTrades] = useState([]);
    const { refresh } = useRefresher();

    const get_trades = async (): Promise<void> => {
        const params = {
            player: user_id
        };
        let response = await axios.get(`${BASEURL}trades`, { params });
        console.log(response);
        setTrades(response.data);
    };

    const flip = async () => {
        setProcessing(true);
        let result = Math.random() < 0.5 ? "heads" : "tails";
        let payout =
            coinSide == result ? tokens + betSize * 1.94 : tokens - betSize;
        document.querySelector("#coin")?.classList.add(result);

        let res = await axios.post(`${BASEURL}create/trade`, {
            player: user_id,
            time: Date.now() / 1000,
            bet_size: betSize.toFixed(2),
            bet: coinSide,
            payout: coinSide == result ? betSize * 1.94 : 0,
            result
        });
        forceRefresh();
        console.log({ result, coinSide, res });
        set_tokens(payout);
        if (coinSide == result)
            showToast(true, "success", SuccessToast(betSize * 1.94));
        else showToast(true, "failure", FailureToast());
        setTimeout(() => {
            document.querySelector("#coin")?.classList.remove(result);
            setProcessing(false);
        }, 4000);
    };

    useEffect(() => {
        if (!user_id) return;
        get_trades();
    }, [user_id, refresh]);

    return {
        coinSide,
        setCoinSide,
        betSize,
        setBetSize,
        processing,
        setProcessing,
        tokens,
        refill_tokens,
        set_tokens,
        user_id,
        flip,
        forceRefresh,
        showToast,
        trades
    };
};
