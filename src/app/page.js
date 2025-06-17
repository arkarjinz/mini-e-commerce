import Image from "next/image";
import styles from "./page.module.css";
import {Button} from "@mui/material";
import CustomSlider from "@/components/CustomSlider";

export default function Home() {
  return (
    <>
      <Button variant="contained">Contained</Button>
        <CustomSlider/>
    </>
  );
}
