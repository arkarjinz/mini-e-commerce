"use client";
import { CategoryImages } from "@/data/CategoryImage";
import { fetchProductsByCategory, setCategory } from "@/redux/productsSlice";
import { Box, Grid, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CategoryItem({ category, index }) {
  const { selectedCategory, items } = useSelector((state) => state.products);
  console.log("selectedCategory", selectedCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory("beauty"));
    dispatch(fetchProductsByCategory("beauty"));
  }, []);


  const handleCategoryClick = (categorySlug) => {
    dispatch(setCategory(categorySlug));
    dispatch(fetchProductsByCategory(categorySlug));
  };

  const active = selectedCategory === category.slug;
  const activeStyles = active && {
    color: "#fff",
    background: green[800],
    "&::before": {
      content: "''",
      position: "absolute",
      border: "20px solid transparent",
      borderTopColor: green[800],
      bottom: "-38px",
      left: 0,
      right: 0,
      margin: "auto",
      width: 0,
    },
  };
  return (
    <>
      <Grid
        size={{ xs: 12, sm: 6, lg: 2 }}
        sx={{ py: 4, position: "relative", ...activeStyles }}
      >
        <Box
          sx={{ borderRight: `1px solid ${grey[300]}`, textAlign: "center" }}
          onClick={() => handleCategoryClick(category.slug)}
        >
          <Image
            src={CategoryImages[index]}
            alt="img"
            width={500}
            height={500}
            style={{ width: 50, height: 50 }}
          ></Image>
          <Typography variant="subtitle1">{category.name}</Typography>
        </Box>
      </Grid>
    </>
  );
}

export default CategoryItem;
