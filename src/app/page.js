import Image from "next/image";
import styles from "./page.module.css";
import {Button} from "@mui/material";
import CustomSlider from "@/components/CustomSlider";
import CategoryList from "@/components/CategoryList";
import ProductsList from "@/components/ProductsList";
import CartItems from "@/components/CartItems";
import CustomDrawer from "@/components/CustomDrawer";

export default function Home() {
  return (
    <>
        <CustomSlider/>
        <CustomDrawer />
        <CategoryList/>
        <ProductsList />
        <CartItems />
    </>
  );
}
