import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = params;
  let data = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await data.json();
  console.log(product);
  return (
    <>
      <Container maxWidth={"md"} sx={{background: "pink", mt: 10}}>
        <Grid container>
          <Grid size={6}>
            <Image
              src={product.thumbnail}
              alt={"img"}
              width={1000}
              height={1000}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            ></Image>
          </Grid>
          <Grid size={6}>
            <Box>
                <Typography>{product.title}</Typography>
                <Typography>{product.price}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
