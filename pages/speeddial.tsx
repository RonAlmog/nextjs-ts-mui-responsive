import Layout from "@/components/layout/Layout";
import React from "react";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import { PrintRounded, Share } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

type Props = {};

const SpeedDialPage = (props: Props) => {
  return (
    <Layout>
      <Box>
        <SpeedDial
          ariaLabel="Navigation"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        >
          <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" />
          <SpeedDialAction icon={<PrintRounded />} tooltipTitle="Print" />
          <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
        </SpeedDial>
      </Box>
    </Layout>
  );
};

export default SpeedDialPage;
