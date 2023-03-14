import {
  Box,
  Typography,
  IconButton,
  Alert,
  AlertTitle,
  Button,
} from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import Link from "../src/Link";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Stack } from "@mui/system";
type Props = {};

const DrawerPage = (props: Props) => {
  const [drawerOpen, setdrawerOpen] = useState(false);
  return (
    <Layout>
      <Stack spacing={2} width="400px" ml={4}>
        <Alert severity="error">This is an Error</Alert>
        <Alert severity="warning">This is your last warning</Alert>
        <Alert severity="info">This is just FYI</Alert>
        <Alert severity="success">Success! you have made it.</Alert>

        <Alert variant="outlined" severity="error">
          This is an Error
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is your last warning
        </Alert>
        <Alert variant="outlined" severity="info">
          This is just FYI
        </Alert>
        <Alert variant="outlined" severity="success">
          Success! you have made it.
        </Alert>

        <Alert variant="filled" severity="error" onClose={() => {}}>
          <AlertTitle>Error</AlertTitle>
          This is an Error
        </Alert>
        <Alert variant="filled" severity="warning" onClose={() => {}}>
          <AlertTitle>Warning</AlertTitle>
          This is your last warning
        </Alert>
        <Alert variant="filled" severity="info" onClose={() => {}}>
          <AlertTitle>Info</AlertTitle>
          This is just FYI
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          onClose={() => {}}
          action={
            <Button color="warning" variant="outlined">
              Click me!
            </Button>
          }
        >
          <AlertTitle>Success</AlertTitle>
          Success! you have made it.
        </Alert>
      </Stack>
    </Layout>
  );
};

export default DrawerPage;
