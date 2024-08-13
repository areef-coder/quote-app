import { Box } from '@mui/material'
import React from 'react'
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

export default function CardSkeliton() {
  return (
    <Box
    sx={{p:2}}>
        <Box 
        sx={{display:'flex',alignItems:'center',justifyContent:'center',flexGrow:1}}>
        <Skeleton animation="wave" />
        </Box>
        </Box >
  )
}
