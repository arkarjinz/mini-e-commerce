"use client";
import { decreaseQuantity, increaseQuantity } from "@/redux/cartSlice";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

function QuantityBtns({ quantity, id }) {
    const dispatch = useDispatch();
  return (
    <Box sx={{display: "flex", gap: 2}}>
      <Button variant="contained" color="secondary" size="small" onClick={() => dispatch(decreaseQuantity(id))}>-</Button>
      <Typography>{quantity}</Typography>
      <Button variant="contained" color="secondary" size="small" onClick={() => dispatch(increaseQuantity(id))}>+</Button>
    </Box>
  );
}

export default QuantityBtns;
