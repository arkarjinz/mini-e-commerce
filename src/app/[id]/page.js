import QuantityBtns from "@/components/QuantityBtns";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = params;
  let data = await fetch(`https://dummyjson.com/products/${id}`);
  let item = await data.json();
  let product = {
    ...item,
    quantity: 1
  }
  if (product && product.message) return (
    <Box sx={{mt: 10}}>
      <Typography>{product.message}</Typography>
    </Box>
  );
  return (
    <>
      {product && (
        <Container maxWidth={"md"} sx={{ background: "pink", mt: 10 }}>
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
              <QuantityBtns id={product.id} quantity={product.quantity} />
            </Grid>

          </Grid>
        </Container>
      )}
    </>
  );
}
