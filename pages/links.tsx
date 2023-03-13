import { Box, Button, Paper, Switch, Typography } from "@mui/material";
import Link from "../src/Link";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Stack } from "@mui/system";
type Props = {};

const LinksPage = (props: Props) => {
  const [dark, setDark] = useState(false);
  return (
    <Layout>
      <Box>
        <Stack spacing={2} direction="row" m={4}>
          <Typography variant="h6">Links</Typography>
          <Link href="#">Link</Link>
          <Link href="#" color="secondary">
            Secondary
          </Link>
          <Link href="#" color="secondary" underline="hover">
            underline hover
          </Link>
          <Link href="#" color="secondary" underline="none">
            underline none
          </Link>
          <Link href="#" variant="h6">
            H6 variant
          </Link>
        </Stack>
      </Box>
    </Layout>
  );
};

export default LinksPage;
