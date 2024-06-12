// src/FDCards.js
import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box, Chip } from '@mui/material';
import { CheckCircle, Block } from '@mui/icons-material';
import mahindra from './images/mahindra.png';
import bajaj from './images/bajaj.png';
import shriram from './images/shriram.png';
import utkarsh from './images/utkarsh.png';

const fdDetails = [
  {
    bankName: "Utkarsh Small Finance Bank",
    interestRate: "9.10% p.a",
    bgColor: "#f3e5f5",
    features: ["Highest Interest Rate", "RBI Insured"],
    featuresColors: ["#9c27b0", "#9c27b0"],
    btnColor: "#9c27b0",
    interestUpto: "Interest Upto",
    img:utkarsh,
  },
  {
    bankName: "Bajaj Finserv",
    interestRate: "8.80% p.a",
    bgColor: "#e3f2fd",
    features: ["Crisil AAA Rated", "No Video KYC required"],
    featuresColors: ["#2196f3", "#2196f3"],
    btnColor: "#2196f3",
    interestUpto: "Interest Upto",
    img:bajaj,
  },
  {
    bankName: "Shriram Finance",
    interestRate: "8.80% p.a",
    bgColor: "#eeeeee",
    features: ["Crisil AAA Rated", "No Video KYC required"],
    featuresColors: ["#616161", "#616161"],
    btnColor: "#000000",
    interestUpto: "Interest Upto",
    img:shriram,
  },
  {
    bankName: "Mahindra Finance",
    interestRate: "8.80% p.a",
    bgColor: "#ffebee",
    features: ["Crisil AAA Rated", "No Video KYC required"],
    featuresColors: ["#f44336", "#f44336"],
    btnColor: "#f44336",
    interestUpto: "Interest Upto",
    img:mahindra,
  },
];

const FDCards = () => {
  return (
    <div style={{padding:"10px"}}>
    <Grid container spacing={2}>
      {fdDetails.map((fd, index) => (
        <Grid item xs={6} sm={6} md={6} key={index}>
          <Card style={{ backgroundColor: fd.bgColor }}>
            <CardContent>
              <div style={{display:"flex"}}>
                <div>
                <img style={{width:"50px",height:"50px",marginRight:"10px"}} src={fd.img}/>
                </div>
              
              <Typography variant="h6">{fd.bankName}</Typography>
              </div>
              
              <div style={{display:"flex"}}>
              <Box style={{backgroundColor:"buttonshadow"}} display="flex" alignItems="center" mb={1} mr={1}>
                <CheckCircle style={{ color: fd.featuresColors[0] }} />
                <Typography variant="body2" style={{ marginLeft: 8 }}>
                  {fd.features[0]}
                </Typography>
              </Box>
              <Box style={{backgroundColor:"buttonshadow"}} display="flex" alignItems="center"
               mb={1}>
                <CheckCircle style={{ color: fd.featuresColors[1] }} />
                <Typography variant="body2" style={{ marginLeft: 8 }}>
                  {fd.features[1]}
                </Typography>
              </Box>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"end"}}>
                <div>
              <Typography variant="body2" >
                {fd.interestUpto}
              </Typography>
              <Typography variant="h6" style={{ marginBottom: 16 }}>
                {fd.interestRate}
              </Typography>
              </div>
              <Button 
                variant="contained"
                style={{ backgroundColor: fd.btnColor, color: '#fff',height:"35px",minWidth:"45px" }}
              >
                Book Now
              </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default FDCards;
