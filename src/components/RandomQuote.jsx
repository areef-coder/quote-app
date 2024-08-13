import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import CircularProgress from '@mui/material/CircularProgress';

import { red } from '@mui/material/colors';
export default function RandomQuote() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false)
    const getRandomQuote = async () => {
        axios.get('https://dummyjson.com/quotes/random')
            .then((response) => {
                setLoading(true);
                setTimeout(() => {
                    setQuote(response.data)
                    setLoading(false)
                }, 2000);
               
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <CircularProgress size={25} />
                    </Box>
                ) : (
                    <Tooltip title="click to refresh" arrow placement='top'>
                        <IconButton sx={{ color: red }} onClick={getRandomQuote}>
                            <RefreshTwoToneIcon />
                        </IconButton>
                    </Tooltip>
                )}


            </Box>

            <Box>
                
                <Typography sx={{ fontWeight: 600 }}>{quote==null?"Click the refresh button to get a random quote":quote?.quote}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Typography variant='caption' color="text.secondary">
                  {loading?"": quote?.author}
                    </Typography>
            </Box>
        </Box>
    )
}
