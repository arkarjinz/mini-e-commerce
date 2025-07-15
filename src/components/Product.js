import { addToCart } from "@/redux/cartSlice";
import { Box, Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

function Product({ item }) {
  const dispatch = useDispatch();
  return (
    <>
      <Grid size={2.4} sx={{ border: `1px solid ${grey[300]}` }}>
        <Link href={`/${item.id}`}>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box>
              <Image
                src={item.thumbnail}
                alt="img"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
              <Box sx={{ px: 4 }}>
                <Typography sx={{ wordBreak: "break-all" }}>
                  {item.title}
                </Typography>
                <Typography>${item.price}</Typography>
              </Box>
            </Box>

            <Button
              size="small"
              variant={"outlined"}
              sx={{ mt: 2, width: "70%", mx: "auto" }}
              onClick={() => {
                dispatch(addToCart(item));
              }}
            >
              Add to cart
            </Button>
          </Box>
        </Link>
      </Grid>
    </>
  );
}

export default Product;
