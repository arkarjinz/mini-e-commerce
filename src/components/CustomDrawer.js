"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "@/redux/cartSlice";
import CartItems from "./CartItems";

export default function CustomDrawer() {
  const { open } = useSelector((state) => state.cart);
  const dispatch = useDispatch();



  return (
    <div>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => dispatch(toggleDrawer(false))}
      >
       <CartItems />
      </Drawer>
    </div>
  );
}
