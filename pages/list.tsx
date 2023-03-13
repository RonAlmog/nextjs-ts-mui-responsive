import {
  Box,
  Button,
  Drawer,
  Paper,
  Switch,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import { ContactMail, Mail, MailLock } from "@mui/icons-material";
import Link from "../src/Link";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Stack } from "@mui/system";
type Props = {};

const ListPage = (props: Props) => {
  const [drawerOpen, setdrawerOpen] = useState(false);
  return (
    <Layout>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/buttons">
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText
                primary="List Item 1"
                secondary="Secondary text here"
              ></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailLock />
            </ListItemIcon>
            <ListItemText
              primary="List Item 2"
              secondary="Secondary text here"
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailLock />
            </ListItemIcon>
            <ListItemText
              primary="List Item 23"
              secondary="Secondary text here too"
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <ContactMail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText>List Item with Avatar</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Layout>
  );
};

export default ListPage;
