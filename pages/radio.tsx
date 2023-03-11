import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  FormHelperText,
} from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import { PrintRounded, Share } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

type Props = {};

const RadioPage = (props: Props) => {
  const [value, setValue] = useState("");
  return (
    <Layout>
      <Box>
        <FormControl>
          <FormLabel>Years of Experience</FormLabel>
          <RadioGroup
            name="job-exp-group"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <FormControlLabel
              control={<Radio size="small" />}
              label="0-2"
              value="0-2"
            />
            <FormControlLabel
              control={<Radio size="small" color="secondary" />}
              label="3-5"
              value="3-5"
            />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
          <FormHelperText>Invalid selection</FormHelperText>
          <Typography variant="h5">{value}</Typography>
        </FormControl>
      </Box>
    </Layout>
  );
};

export default RadioPage;
