import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Stack,
} from "@mui/material";
import { margin } from "@mui/system";

type Props = {};

const ImagelistPage = (props: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const itemData = [
    {
      img: "https://res.cloudinary.com/plenta/image/upload/v1590374141/demo/southwest-salad_qhgexr.jpg",
      title: "breakfast",
    },
    {
      img: "https://res.cloudinary.com/plenta/image/upload/v1590374367/demo/birthday-cake_z5mitx.jpg",
      title: "burger",
    },
    {
      img: "https://res.cloudinary.com/plenta/image/upload/v1590374466/demo/raspberry-cake_pbs8gb.jpg",
      title: "coffee",
    },
    {
      img: "https://res.cloudinary.com/plenta/image/upload/v1590374080/demo/pasta-salad_nprujw.jpg",
      title: "coffee",
    },
    {
      img: "https://res.cloudinary.com/plenta/image/upload/v1590373808/demo/burgerandfries_ap61r3.jpg",
      title: "coffee",
    },
  ];

  return (
    <Layout>
      <Stack spacing={4}>
        <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Layout>
  );
};

export default ImagelistPage;
