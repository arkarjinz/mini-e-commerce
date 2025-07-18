import CartsList from '@/components/CartsList';
import { Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

function Cart() {
   
  return (
    <Box sx={{mt: 10}}>
        <CartsList />
    </Box>
  )
}

export default Cart;