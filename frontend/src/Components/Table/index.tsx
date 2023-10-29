import { Container, TableStyle } from "./style";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { timeDifference } from "src/utils/relativeTime";
import TableSkeleton from "src/Components/SkeletonLoader";

type DataType = {
    data: {
        p_id: number;
        player: string;
        time: number;
        bet: string;
        result: string;
        bet_size: number;
        payout: number;
    }[];
};

const BasicTable: React.FC<DataType> = ({ data }) => {
    return (
        <Container>
            <div className="heading">Trade History</div>
            {data.length === 0 ? (
                <TableSkeleton />
            ) : (
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
                                <TableCell className="tc" align="right">
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
                            {data.map((row) => (
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
                                            src={`/${row.bet}.png`}
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
                                            src={`/${row.result}.png`}
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
            )}
        </Container>
    );
};

export default BasicTable;
