"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function CartItems() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log("cartItems>>", cartItems);
  return (
    <>
      {cartItems.length === 0 && <Typography>Cart is empty</Typography>}
      <Box>
        {cartItems.map((item, index) => {
          console.log(item);
          return (
            <Box key={index}>
              <Typography>{item.title}</Typography>
            </Box>
          );
        })}
        <Link href="/cart">
          <Button variant="contained">View all carts</Button>
        </Link>
      </Box>
    </>
  );
}

export default CartItems;
