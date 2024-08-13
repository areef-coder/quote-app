import { Box, Paper, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

export default function Card({data}) {
  return (
    <div style={{height:'20vh',overflow:'auto'}}>
        <Box sx={{p:2}}>
          <Typography sx={{color:'red'}} variant='body2'>
           {data?.author} 
          </Typography>
          <Typography sx={{color:'green'}}  variant='body2' color={"text.secondary"}>
            {data?.quote}
          </Typography>
        </Box>
    </div>
  )
}
