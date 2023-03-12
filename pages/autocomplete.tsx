import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  FormControlLabel,
  Switch,
  Typography,
  FormHelperText,
  Checkbox,
  FormGroup,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";

type Props = {};

const AutocompletePage = (props: Props) => {
  const skills = ["html", "css", "javascript", "typescript", "react"];

  const [accept, setAccept] = useState(false);

  return (
    <Layout>
      <Stack spacing={2} width="250px">
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="Skills" />}
        />
      </Stack>
    </Layout>
  );
};

export default AutocompletePage;
