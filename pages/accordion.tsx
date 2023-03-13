import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
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
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { margin } from "@mui/system";

type Props = {};

const AccordionPage = (props: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Layout>
      <Accordion
        sx={{ width: "300px" }}
        disableGutters
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary id="panel1" expandIcon={<ExpandMore />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Red Velvet Cheese Ball Gift Basket from Toronto Baskets is built
            around a deliciously decadent gourmet treat and makes for a great
            gift for cheese lovers and anyone who appreciates gourmet flavour.
            Perfect for a holiday party, the Red Velvet Cheese Ball is the
            ultimate dip for red velvet lovers, a sweet version of a cheese ball
            will have you going back for more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "300px" }}
        disableGutters
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary id="panel2" expandIcon={<ExpandMore />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Red Velvet Cheese Ball Gift Basket from Toronto Baskets is built
            around a deliciously decadent gourmet treat and makes for a great
            gift for cheese lovers and anyone who appreciates gourmet flavour.
            Perfect for a holiday party, the Red Velvet Cheese Ball is the
            ultimate dip for red velvet lovers, a sweet version of a cheese ball
            will have you going back for more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "300px" }}
        disableGutters
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary id="panel3" expandIcon={<ExpandMore />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Red Velvet Cheese Ball Gift Basket from Toronto Baskets is built
            around a deliciously decadent gourmet treat and makes for a great
            gift for cheese lovers and anyone who appreciates gourmet flavour.
            Perfect for a holiday party, the Red Velvet Cheese Ball is the
            ultimate dip for red velvet lovers, a sweet version of a cheese ball
            will have you going back for more.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Layout>
  );
};

export default AccordionPage;
