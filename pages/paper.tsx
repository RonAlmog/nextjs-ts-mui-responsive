import { Box, Button, Paper, Switch, Typography } from "@mui/material";
import Link from "../src/Link";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
type Props = {};

const PaperPage = (props: Props) => {
  const [dark, setDark] = useState(false);
  return (
    <Layout>
      <Box>
        <Paper elevation={3}>
          <Typography variant="h3" component="h1" align="center">
            Title here!
          </Typography>
          <Switch checked={dark} onChange={() => setDark(!dark)} /> dark?
          {dark ? "yes" : "no"}
          <Button variant="outlined" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Paper>
      </Box>
    </Layout>
  );
};

export default PaperPage;
