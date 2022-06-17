import { TableCell, TableRow } from "@mui/material";
import React, { FC } from "react";

import useHeadersArray from "../../hook/useHeadersArray";
import { ItemI } from "../../utils/types";
import GenerateComponent from "../GenerateComponent/GenerateComponent";

interface TableDataProps {
  item: ItemI;
  headers: string[];
}
const TableData: FC<TableDataProps> = ({ item, headers }) => {
  const { finalArray } = useHeadersArray(item, headers);

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {finalArray.map((val) => {
        return (
          <TableCell key={val} align="left">
            {val ? <GenerateComponent value={val} /> : "-"}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default TableData;
