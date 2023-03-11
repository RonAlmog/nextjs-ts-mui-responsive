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
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  FilledInput,
  Select,
  MenuItem,
} from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import {
  PrintRounded,
  Share,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import {
  Send,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";

type Props = {};

const TextPage = (props: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [country, setCountry] = useState("");

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <Stack spacing={4}>
        <Stack direction="row" spacing={4}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <Stack direction="row" spacing={4}>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            color="secondary"
          />
          <TextField label="Name" variant="outlined" size="medium" />
          <TextField
            label="Name"
            variant="outlined"
            required
            helperText="Enter your name here"
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            size="medium"
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            size="small"
            color="primary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            variant="outlined"
            size="small"
            color="primary"
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Box width="250px">
            <TextField
              label="Select country"
              select
              fullWidth
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value="US">USA</MenuItem>
              <MenuItem value="AU">Australia</MenuItem>
              <MenuItem value="CA">Canada</MenuItem>
            </TextField>
          </Box>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default TextPage;
