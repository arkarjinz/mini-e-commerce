import Image from "next/image";
import styles from "./page.module.css";
import {Button} from "@mui/material";
import CustomSlider from "@/components/CustomSlider";
import CategoryList from "@/components/CategoryList";

export default function Home() {
  return (
    <>
        {/* <CustomSlider/> */}
        <CategoryList/>
    </>
  );
}
