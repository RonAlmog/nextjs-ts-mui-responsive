import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";

type Props = {};

const BoxPage = (props: Props) => {
  return (
    <Layout>
      <Stack sx={{ border: "1px solid green" }} direction="row" spacing={2}>
        <Box component="span">span</Box>
        <Divider orientation="vertical" flexItem />
        <Box component="article">Article</Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "200px",
          }}
        >
          div with custom style. colors, width, etc.
        </Box>
        <Box
          display="flex"
          height="100px"
          width="120px"
          bgcolor="success.light"
        >
          direct properties on Box
        </Box>
      </Stack>
    </Layout>
  );
};

export default BoxPage;
