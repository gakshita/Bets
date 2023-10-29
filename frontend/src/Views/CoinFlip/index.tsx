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
import { useFunctionality } from "./useFunctionality";

const CoinFlip: React.FC = () => {
    const {
        coinSide,
        setCoinSide,
        betSize,
        setBetSize,
        processing,
        tokens,
        flip,
        trades
    } = useFunctionality();
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
                                className={`button ${
                                    betSize - 1 <= 0 && "disabled"
                                }`}
                                onClick={() =>
                                    betSize - 1 > 0 &&
                                    setBetSize((val) => val - 1)
                                }
                            >
                                -
                            </Box3>
                            <input
                                type="number"
                                value={betSize}
                                onChange={(e) =>
                                    setBetSize(parseFloat(e.target.value))
                                }
                            />
                            <Box3
                                className={`button ${
                                    betSize == tokens && "disabled"
                                }`}
                                onClick={() =>
                                    betSize < tokens &&
                                    setBetSize((val) => val + 1)
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
                            <Box3
                                className="button"
                                onClick={() => setBetSize(0.1)}
                            >
                                Min
                            </Box3>
                            <Box3
                                className="button"
                                onClick={() => setBetSize(tokens / 2)}
                            >
                                /2
                            </Box3>

                            <Box3
                                className="button"
                                onClick={() => setBetSize(tokens)}
                            >
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
                </Box2>{" "}
            </FlexBox>
            <Table data={trades} />
        </Container>
    );
};
export default CoinFlip;
