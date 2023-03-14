import Layout from "@/components/layout/Layout";
import React from "react";
import {
  Box,
  SpeedDial,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CssBaseline,
} from "@mui/material";
import { useMemo } from "react";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import { PrintRounded, Share } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import makeData from "./makeData";
import { useTable } from "react-table";

type Props = {};

const ReactTablePage = (props: Props) => {
  const data = useMemo(() => makeData(20), []);
  console.log("data", data);

  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Visits",
        accessor: "visits",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Profile Progress",
        accessor: "progress",
      },
    ],
    []
  );
  return (
    <div>
      <CssBaseline />
      <ReactTable columns={columns} data={data} />
    </div>
  );
};

function ReactTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <Layout>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup: any) => (
            <TableRow
              key={headerGroup.id}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column: any) => (
                <TableCell key={column.id} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell key={cell.id} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Layout>
  );
}

export default ReactTablePage;
