"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer, totalCount } from "@/redux/cartSlice";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function CustomBadgeIcon() {
  const total = useSelector(totalCount);
  const dispatch = useDispatch();
  return (
    <IconButton onClick={() => dispatch(toggleDrawer(true))}>
      <ShoppingCartIcon fontSize="small" />
      <CartBadge badgeContent={total} color="primary" overlap="circular" />
    </IconButton>
  );
}
