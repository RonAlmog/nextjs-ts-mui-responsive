import {
  Box,
  Typography,
  IconButton,
  Alert,
  AlertProps,
  AlertTitle,
  Button,
  Snackbar,
} from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import Link from "../src/Link";
import { useState, forwardRef } from "react";
import Layout from "@/components/layout/Layout";
import { Stack } from "@mui/system";
type Props = {};

const DrawerPage = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleClose = (e?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
      return <Alert elevation={6} ref={ref} {...props} />;
    }
  );
  return (
    <Layout>
      <Box p={3}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Submit
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <SnackbarAlert onClose={handleClose} severity="success">
            Form submitted successfully!
          </SnackbarAlert>
        </Snackbar>
        {/* <Snackbar
          message="Form submitted successfully!"
          autoHideDuration={4000}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          color="info"
        ></Snackbar> */}
      </Box>
    </Layout>
  );
};

export default DrawerPage;
