import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { ChangeEvent, FC, useState } from "react";

import useFetch from "../../hook/useFetch";
import TableData from "../TableData/TableData";

interface CustomTableProps {
  type: string;
  headers: string[];
}

const CustomTable: FC<CustomTableProps> = ({ type, headers }) => {
  const { data } = useFetch(type);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <TableContainer component={Paper} sx={{ m: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              borderTop: "2px solid #61d6cc",
              borderBottom: "2px solid #61d6cc",
            }}
          >
            <TableRow>
              {headers.map((item: string) => (
                <TableCell
                  key={item}
                  align="left"
                  sx={{
                    color: "#61d6cc",
                    backgroundColor: "#fff",
                    textTransform: "capitalize",
                  }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item: any) => (
                <TableData item={item} headers={headers} key={item.id} />
              ))}
          </TableBody>
        </Table>
        <TablePagination
          sx={{ borderTop: "2px solid #61d6cc" }}
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
};

export default CustomTable;
