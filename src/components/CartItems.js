"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function CartItems() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log("cartItems>>", cartItems);
  return (
    <>
      {cartItems.length === 0 && <Typography>Cart is empty</Typography>}
      {cartItems.map((item, index) => {
        console.log(item)
        return(
          <Box key={index}>
            <Typography>{item.title}</Typography>
          </Box>
        )
      })}
    </>
  );
}

export default CartItems;
