import {
  Box,
  Typography,
  IconButton,
  Alert,
  AlertProps,
  AlertTitle,
  Button,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import Link from "../src/Link";
import { useState, forwardRef } from "react";
import Layout from "@/components/layout/Layout";
import { Stack } from "@mui/system";
type Props = {};

const DialogPage = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <Box p={3}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Submit the test?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to submit? You will not be able to change
              this later.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button autoFocus onClick={() => setOpen(false)}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default DialogPage;
