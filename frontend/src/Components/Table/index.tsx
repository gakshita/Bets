import { useEffect, useState } from "react";
import { Container, TableStyle } from "./style";
import axios from "axios";
import { BASEURL } from "../../config";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useUserId } from "src/context/GlobalContext";
import { useRefresher } from "src/context/Refresher";
import { timeDifference } from "src/utils/relativeTime";
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default function BasicTable() {
    const [trades, setTrades] = useState([]);
    const { user_id } = useUserId();
    const { refresh } = useRefresher();

    const get_trades = async (): Promise<void> => {
        const params = {
            player: user_id
        };
        let response = await axios.get(`${BASEURL}trades`, { params });
        console.log(response);
        setTrades(response.data);
    };
    useEffect(() => {
        if (!user_id) return;
        get_trades();
    }, [user_id, refresh]);
    return (
        <Container>
            <div className="heading">Trade History</div>
            <TableContainer component={Paper} className="table">
                <Table
                    // stickyHeader
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                    className="table"
                >
                    <TableHead className="th">
                        <TableRow>
                            <TableCell className="tc">Player</TableCell>
                            <TableCell
                                className="tc"
                                align="right"
                                className="tc"
                            >
                                Time{" "}
                            </TableCell>

                            <TableCell className="tc" align="right">
                                Bet{" "}
                            </TableCell>
                            <TableCell className="tc" align="right">
                                Result{" "}
                            </TableCell>
                            <TableCell className="tc" align="right">
                                Bet Size{" "}
                            </TableCell>
                            <TableCell className="tc" align="right">
                                Payout{" "}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="tb">
                        {trades.map((row) => (
                            <TableRow
                                key={row.p_id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0
                                    }
                                }}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className="player"
                                >
                                    {row.player}
                                </TableCell>
                                <TableCell align="right" className="tr">
                                    {/* {row.time} */}
                                    {timeDifference(row.time * 1000)}
                                </TableCell>
                                <TableCell
                                    align="right"
                                    className="tr coin_side"
                                >
                                    <img
                                        src={`public/${row.bet}.png`}
                                        alt="bet"
                                        width="20px"
                                        height="20px"
                                    />
                                </TableCell>
                                <TableCell
                                    align="right"
                                    className="tr coin_side"
                                >
                                    <img
                                        src={`public/${row.result}.png`}
                                        alt="bet"
                                        width="20px"
                                        height="20px"
                                    />
                                </TableCell>
                                <TableCell align="right" className="tr">
                                    {row.bet_size} DEMO
                                </TableCell>
                                <TableCell align="right" className="tr">
                                    {row.payout} DEMO
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
