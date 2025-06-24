import React from "react";
import { Container, Grid } from "@mui/material";
import CategoryItem from "@/components/CategoryItem";
import { CategoryImages } from "@/data/CategoryImage";
import Image from "next/image";
import { grey } from "@mui/material/colors";

async function CategoryList() {
  const data = await fetch("https://dummyjson.com/products/category-list");
  const categories = await data.json();
  const categoryList = categories.slice(0, 6);
  console.log(categoryList);
  return (
    <>
      <Container sx={{my: 4}}>
        <Grid container sx={{border: `1px solid ${grey[400]}`, }}>
          {categoryList.map((category, index) => (
            <React.Fragment key={index}>
              <CategoryItem category={category} index={index} />
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default CategoryList;
