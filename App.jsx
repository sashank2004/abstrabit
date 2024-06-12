import Appbar from './Appbar'
import Landing from './Landing'
import {Grid } from '@mui/material';
import FDAnswers from './FDAnswers';
import FDCards from './FDCards';
import FDCardsdate from './FDCardsdate';
import { useState } from 'react'

function App() {
  return (
    <div className="app">
      <Appbar></Appbar>
      <Landing></Landing>
      <Grid style={{backgroundColor:"ButtonShadow"}} container>
      <Grid item xs={8}>
      
      <FDCards />
      <FDAnswers />
      
      </Grid> 
    
      <Grid item xs={4}>
     
      <FDCardsdate />
      
      </Grid> 
      </Grid>
      
    </div>
  )
}

export default App
