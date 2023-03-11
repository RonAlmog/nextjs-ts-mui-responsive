import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import { PrintRounded, Share } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import {
  Send,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";

type Props = {};

const SpeedDialPage = (props: Props) => {
  const [formats, setFormats] = useState<string[]>([]);
  const handleFormatChange = (
    e: React.MouseEvent,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };
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
        <Stack display="block" direction="row" spacing={3}>
          <Button variant="text" href="https://google.ca">
            Google
          </Button>
          <Button variant="contained" size="small" color="primary">
            Contained
          </Button>
          <Button variant="outlined" size="medium" color="secondary">
            Outlined
          </Button>
          <Button
            variant="contained"
            size="large"
            color="warning"
            disableElevation
          >
            Warning
          </Button>
        </Stack>
        <Stack display="block" direction="row" spacing={3}>
          <Button variant="contained" color="error" startIcon={<Send />}>
            Error
          </Button>
          <Button variant="contained" color="success" endIcon={<Send />}>
            Success
          </Button>
          <IconButton color="success" size="small">
            <Send />
          </IconButton>
        </Stack>

        <Stack direction="row">
          <ButtonGroup variant="contained">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="xx"
            size="medium"
            color="success"
            value={formats}
            onChange={handleFormatChange}
          >
            <ToggleButton value="Bold">
              <FormatBold />
            </ToggleButton>
            <ToggleButton value="Italic">
              <FormatItalic />
            </ToggleButton>
            <ToggleButton value="Underline">
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default SpeedDialPage;
