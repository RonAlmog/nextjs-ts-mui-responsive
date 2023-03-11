import Layout from "@/components/layout/Layout";
import React from "react";
import { Box, Stack, Avatar, AvatarGroup } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import { PrintRounded, Share } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

type Props = {};

const SpeedDialPage = (props: Props) => {
  return (
    <Layout>
      <Stack spacing={4}>
        <Stack direction="row" spacing={1}>
          <Avatar sx={{ bgcolor: "primary.light" }}>AB</Avatar>
          <Avatar sx={{ bgcolor: "secondary.light" }}>AB</Avatar>
        </Stack>
        <Stack direction="row" spacing={1}>
          <AvatarGroup>
            <Avatar sx={{ bgcolor: "primary.light" }}>AB</Avatar>
            <Avatar sx={{ bgcolor: "secondary.light" }}>AB</Avatar>
            <Avatar sx={{ bgcolor: "primary.light" }}>AB</Avatar>
            <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" />
            <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" />
          </AvatarGroup>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default SpeedDialPage;
