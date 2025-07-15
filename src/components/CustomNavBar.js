"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from "next/image";
import CustomBadgeIcon from "@/components/CustomBadgeIcon";
import {red} from "@mui/material/colors";
import { totalCount } from '@/redux/cartSlice';

export default function CustomNavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{backgroundColor : "#fff"}}>
                <Toolbar sx={{justifyContent : "space-between"}}>
                   <Image src="/mart.png" alt="logo" width={40} height={40}>
                   </Image>
                 <CustomBadgeIcon/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
