import { TableCell, TableRow } from "@mui/material";
import React, { FC } from "react";

interface ItemI {
  [key: string]: string | number | ItemI;
}

interface TableRowComponentProps {
  item: ItemI;
  headers: string[];
}
const TableRowComponent: FC<TableRowComponentProps> = ({ item, headers }) => {
  const ren = (obj: ItemI, array: string[] = []) => {
    const final: any[] = array;
    for (const i of Object.entries(obj)) {
      const [_key, value] = i;

      if (typeof value === "string" || typeof value === "number") {
        final.push([_key, value]);
      } else if (typeof value === "object") {
        ren(value, final);
      }
    }

    return final;
  };

  const filterOnlySpecifiedHeaders = (headerItem: ItemI, obj: ItemI) => {
    const final: ItemI = obj;
    for (const i of Object.entries(headerItem)) {
      const [key, value] = i;
      headers.map((header: string) => {
        if (typeof value === "string" || typeof value === "number") {
          if (header === key) {
            final[key] = value;
          }
        } else if (typeof value === "object") {
          filterOnlySpecifiedHeaders(value, final);
        }
      });
    }

    return final;
  };

  const sortFinal = (filteredOnlySpecifiedHeaders: any[]) => {
    const sorted = filteredOnlySpecifiedHeaders.sort((a, b) => {
      const indexOfA = headers.indexOf(a[0]);
      const indexOfB = headers.indexOf(b[0]);
      return indexOfA < indexOfB ? -1 : 1;
    });

    return sorted;
  };

  return (
    <TableRow
      key={"item.id"}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {sortFinal(ren(filterOnlySpecifiedHeaders(item, {}))).map((val) => {
        return (
          <TableCell key={val} align="left">
            {val ? val[1] : "--"}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default TableRowComponent;
