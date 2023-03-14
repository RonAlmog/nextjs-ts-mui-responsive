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
} from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import { PrintRounded, Share } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

type Props = {};

const SpeedDialPage = (props: Props) => {
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Olenolin",
    last_name: "MacCarter",
    email: "omaccarter0@marketwatch.com",
    gender: "Male",
    ip_address: "213.185.136.231",
  },
  {
    id: 2,
    first_name: "Sigismondo",
    last_name: "Richardon",
    email: "srichardon1@flickr.com",
    gender: "Male",
    ip_address: "181.145.47.100",
  },
  {
    id: 3,
    first_name: "Daron",
    last_name: "Calendar",
    email: "dcalendar2@goo.ne.jp",
    gender: "Male",
    ip_address: "188.123.110.122",
  },
  {
    id: 4,
    first_name: "Ring",
    last_name: "Fawloe",
    email: "rfawloe3@guardian.co.uk",
    gender: "Bigender",
    ip_address: "100.87.21.59",
  },
  {
    id: 5,
    first_name: "Hilda",
    last_name: "Room",
    email: "hroom4@theguardian.com",
    gender: "Female",
    ip_address: "159.180.178.119",
  },
  {
    id: 6,
    first_name: "Orran",
    last_name: "Ramey",
    email: "oramey5@businessinsider.com",
    gender: "Male",
    ip_address: "94.95.167.71",
  },
  {
    id: 7,
    first_name: "Gladys",
    last_name: "Penberthy",
    email: "gpenberthy6@privacy.gov.au",
    gender: "Female",
    ip_address: "5.60.226.85",
  },
  {
    id: 8,
    first_name: "Min",
    last_name: "Bartoszewicz",
    email: "mbartoszewicz7@etsy.com",
    gender: "Female",
    ip_address: "43.107.21.233",
  },
  {
    id: 9,
    first_name: "Noah",
    last_name: "Batham",
    email: "nbatham8@ocn.ne.jp",
    gender: "Male",
    ip_address: "7.15.219.69",
  },
  {
    id: 10,
    first_name: "Almeria",
    last_name: "Jordon",
    email: "ajordon9@icio.us",
    gender: "Female",
    ip_address: "70.204.250.41",
  },
];

export default SpeedDialPage;
