import Layout from "@/components/layout/Layout";
import React from "react";
import { Box, Stack, Button } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import { PrintRounded, Share } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

type Props = {};

const SpeedDialPage = (props: Props) => {
  return (
    <Layout>
      <Stack spacing={3}>
        <Stack direction="row" spacing={3}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Button variant="text" href="https://google.ca">
            Google
          </Button>
          <Button variant="contained" color="primary">
            Contained
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default SpeedDialPage;
