import { Box } from '@mui/material';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RandomQuote from './components/RandomQuote';
import { red } from '@mui/material/colors';
import CardSkeliton from './components/CardSkeliton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [QuotesLoading, setQuotesLoading] = useState(false);

  useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
      .then((response) => {
        // console.log(response.data.quotes);
        setQuotesLoading(true);
        setTimeout(() => {
          setQuotesLoading(false)
          setAllQuotes(response.data.quotes)
        }, 2000);


      })
      .catch((error) => {
        console.log(error);

      })
  }, [])


  return (
    <div >

      <Box sx={{ flexGrow: 1, backgroundColor: 'gray' }}>
        <Grid container sx={{ p: 2, mb: 2, display: "flex", justifyContent: "center", alignItems: "center" }} spacing={2}>

          <Grid item xs={4} >
            <Item sx={{ color: 'red' }} elevation={20}><RandomQuote /></Item>
          </Grid>

        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#ffd54f' }}>
        <Grid container sx={{ p: 2 }} spacing={2}>
          {QuotesLoading ? [1, 2, 3, 4, 5, 6,7,8,9,10,11,12].map(() => (
            <Grid item xs={4} >
              <Item elevation={10} sx={{ borderRadius: 15 }}>
                <CardSkeliton />
              </Item></Grid>

          )) : (
            allQuotes?.map((value, index) => (
              <Grid item xs={4} key={index}>
                <Item elevation={10} sx={{ borderRadius: 15, backgroundColor: 'black' }}><Card data={value} /></Item>
              </Grid>
            ))
          )}


          {/* {}  */}
        </Grid>
      </Box>

    </div>
  );
}

export default App;
