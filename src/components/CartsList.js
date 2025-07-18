"use client";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuantityBtns from "./QuantityBtns";
import { Delete } from "@mui/icons-material";
import { removeItem } from "@/redux/cartSlice";

function CartsList() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();
  if (!cartItems) return;
  const grandTotal =
    cartItems &&
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <>
      <Grid container>
        {cartItems.map((item, index) => {
          const { thumbnail, title, price, quantity, id } = item;

          return (
            <React.Fragment key={index}>
              <Grid size={1}>
                <Image
                  src={thumbnail}
                  alt="img"
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                ></Image>
              </Grid>
              <Grid size={4}>
                <Typography>{title}</Typography>
              </Grid>
              <Grid size={4}>
                <QuantityBtns quantity={quantity} id={id}></QuantityBtns>
              </Grid>
              <Grid size={2}>
                <Typography>{price * quantity}</Typography>
              </Grid>
              <Grid size={1}>
                <IconButton onClick={() => dispatch(removeItem(id))}>
                  <Delete />
                </IconButton>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
      {cartItems?.length > 0 && (
        <Stack direction={"row"} sx={{ justifyContent: "flex-end" ,pr: 4 }}>
          <Typography variant="subtitle1">Grand Total: {grandTotal.toFixed(2)}</Typography>
        </Stack>
      )}
    </>
  );
}

export default CartsList;
