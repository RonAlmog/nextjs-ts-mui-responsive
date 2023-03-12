import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { margin } from "@mui/system";

type Props = {};

const GridPage = (props: Props) => {
  return (
    <Layout>
      <Paper sx={{ padding: "32px", margin: "10px" }} elevation={4}>
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
      </Paper>
      <Box width="300px">
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography gutterBottom variant="body2">
              Next, we define a new service called api which builds the local
              Dockerfile with target production and names it quotes-api. After
              that, it has a depends_on definition on the db container which is
              our Postgres container.
            </Typography>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};

export default GridPage;
