"use client";

import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { Container, Grid } from "@mui/material";

function ProductsList() {
  const { status, items, error } = useSelector((state) => state.products);
  console.log("items>>>", items);
  if(status === "loading") return <p>Loading...</p>
  if(status === "failed") return <p>{error}</p>
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {items?.products?.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Product item={item} />
              </React.Fragment>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default ProductsList;
