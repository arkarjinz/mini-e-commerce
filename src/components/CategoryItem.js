import { CategoryImages } from "@/data/CategoryImage";
import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import React from "react";

function CategoryItem({category, index}) {
  return (
    <>
      <Grid size={{ xs: 12, sm: 6, lg: 2 }} sx={{py: 4}}>
        <Box sx={{borderRight: `1px solid ${grey[300]}`, textAlign: "center"}}>
            <Image src={CategoryImages[index]} alt="img" width={500} height={500} style={{width: 50, height: 50}}></Image>
            <Typography variant="subtitle1">{category}</Typography>
        </Box>
      </Grid>
    </>
  );
}

export default CategoryItem;
