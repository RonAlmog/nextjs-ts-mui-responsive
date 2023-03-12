import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { Box, Divider, Grid, Stack } from "@mui/material";

type Props = {};

const GridPage = (props: Props) => {
  return (
    <Layout>
      <Grid container my={4} spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="primary.light" p={2}>
            Iten 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="primary.light" p={2}>
            Iten 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="primary.light" p={2}>
            Iten 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="primary.light" p={2}>
            Iten 4
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default GridPage;
