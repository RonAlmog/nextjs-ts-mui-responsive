import {
  Box,
  Button,
  Drawer,
  Paper,
  Switch,
  Typography,
  IconButton,
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
      <IconButton
        size="large"
        edge="start"
        color="primary"
        onClick={() => setdrawerOpen(true)}
        sx={{ ml: 3 }}
      >
        <MenuBook />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setdrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </Layout>
  );
};

export default DrawerPage;
