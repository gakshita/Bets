import {
    Container,
    FlexBox,
    Box1,
    Box2,
    Text,
    Text2,
    Box3,
    Coin
} from "./style";
import Table from "../../Components/Table";
import Button from "../../Components/Buttons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTokens, useUserId } from "src/context/GlobalContext";
import { BASEURL } from "src/config";
import { useRefresher } from "src/context/Refresher";
import { useToast } from "src/context/Toast";
import { SuccessToast, FailureToast } from "src/Components/Toast";
const BetBox: React.FC = () => {
    const [coinSide, setCoinSide] = useState("heads");
    const [betSize, setBetSize] = useState(0.1);
    const [processing, setProcessing] = useState(false);
    const { tokens, refill_tokens, set_tokens } = useTokens();
    const { user_id } = useUserId();
    const { forceRefresh } = useRefresher();
    const { showToast } = useToast();
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
        // showToast(true, "failure", FailureToast());
    }, []);

    return (
        <Box2 className="bet-box">
            <Box1>
                <FlexBox>
                    <div className="stats">
                        <Text>Payout</Text>
                        <Text2>x1.94</Text2>
                    </div>
                    <div className="stats">
                        <Text>Chance</Text>
                        <Text2>50.00%</Text2>
                    </div>
                </FlexBox>
            </Box1>
            <Box1 className="full-height">
                <Text>Your bet</Text>
                <FlexBox>
                    <Box3
                        className={`button ${betSize - 1 <= 0 && "disabled"}`}
                        onClick={() =>
                            betSize - 1 > 0 && setBetSize((val) => val - 1)
                        }
                    >
                        -
                    </Box3>
                    <input
                        type="number"
                        value={betSize}
                        onChange={(e) => setBetSize(parseFloat(e.target.value))}
                    />
                    <Box3
                        className={`button ${betSize == tokens && "disabled"}`}
                        onClick={() =>
                            betSize < tokens && setBetSize((val) => val + 1)
                        }
                    >
                        +
                    </Box3>
                </FlexBox>
                {betSize > tokens ||
                    (betSize <= 0 && (
                        <div className="error">Invalid bet size</div>
                    ))}
                <FlexBox>
                    <Box3 className="button" onClick={() => setBetSize(0.1)}>
                        Min
                    </Box3>
                    <Box3
                        className="button"
                        onClick={() => setBetSize(tokens / 2)}
                    >
                        /2
                    </Box3>

                    <Box3 className="button" onClick={() => setBetSize(tokens)}>
                        Max
                    </Box3>
                </FlexBox>
            </Box1>
            <Box1 className="full-height">
                <Text>Winning side</Text>

                <FlexBox className="flex-start">
                    <img
                        src="/heads.png"
                        alt=""
                        onClick={() =>
                            setCoinSide((side) =>
                                side == "heads" ? "tails" : "heads"
                            )
                        }
                        className={`coins_sm ${
                            coinSide == "heads" && "selected"
                        }`}
                    />
                    <img
                        src="/tails.png"
                        alt=""
                        onClick={() =>
                            setCoinSide((side) =>
                                side == "heads" ? "tails" : "heads"
                            )
                        }
                        className={`coins_sm ${
                            coinSide == "tails" && "selected"
                        }`}
                    />
                </FlexBox>
            </Box1>
            <Button
                width="100%"
                fontSize={"md"}
                height="44px"
                text={"Flip"}
                func={flip}
                disabled={processing}
            />
        </Box2>
    );
};

const CoinFlip: React.FC = () => {
    return (
        <Container>
            <FlexBox className="top-section">
                <div className="coin-selection">
                    <Coin>
                        <div id="coin">
                            <div className="side-a">
                                <img
                                    className="side-a"
                                    src="/heads.png"
                                    alt=""
                                />
                            </div>
                            <div className="side-b">
                                <img
                                    className="side-b"
                                    src="/tails.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Coin>
                </div>
                <BetBox />
            </FlexBox>
            <Table />
        </Container>
    );
};
export default CoinFlip;
