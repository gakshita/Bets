import Skeleton from "@mui/material/Skeleton";
import { TableStyle } from "./style";
const TableSkeleton = () => {
    return (
        <TableStyle>
            {" "}
            <Skeleton variant="rectangular" className="tableSkeleton" />
        </TableStyle>
    );
};

export default TableSkeleton;
