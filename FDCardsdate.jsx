// src/FDCards.js
import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';

const fdDetails = [
  {
    status: "Video KYC",
    dateLabel: "Scheduled On",
    date: "28",
    monthYear: "Oct, 2023",
    bankName: "Utkarsh SF Bank FD Plan 2",
    depositAmount: "Rs. 20,000",
    tenure: "2 Years",
    interestRate: "9.10%",
    primaryAction: "Complete Now",
    secondaryAction: "Reschedule",
  },
  {
    status: "Pending Payment",
    dateLabel: "Pay By",
    date: "30",
    monthYear: "Oct, 2023",
    bankName: "Bajaj Finserv Corp FD 1",
    depositAmount: "Rs. 25,000",
    tenure: "18 Months",
    interestRate: "8.10%",
    primaryAction: "Pay Now",
    secondaryAction: "Cancel Application",
  },
  {
    status: "Upcoming FD Maturity",
    dateLabel: "Renew by",
    date: "30",
    monthYear: "Oct, 2023",
    bankName: "Shriram Finance Corp FD 1",
    depositAmount: "Rs. 25,000",
    tenure: "18 Months",
    interestRate: "8.10%",
    primaryAction: "Renew Now",
    secondaryAction: "Compare other FDs",
  },
];

const FDCardsdate = () => {
  return (
    <Grid container style={{padding:"12px"}} spacing={2}>
      {fdDetails.map((fd, index) => (
        <Grid item xs={12} key={index}>
          <Card>
            <CardContent>
              <Typography style={{fontWeight:"bold"}} variant="h6">{fd.status}</Typography>
              
              <Box display="flex" alignItems="center" mb={2}>
                <div>
                <Typography fontSize={12} variant="h15">{fd.dateLabel}</Typography>
                <Box mr={6} textAlign="center">
                  <Typography fontSize={50} style={{backgroundColor:"ButtonShadow"}} variant="h3">{fd.date}</Typography>
                  <Typography fontSize={12} style={{backgroundColor:"red"}}>{fd.monthYear}</Typography>
                </Box>
                </div>
                <Box>                  
                  <Typography fontSize={15} fontWeight="bold" mb={1} variant="h6">{fd.bankName}</Typography>
                  <div style={{display:"flex",gap:"8px"}}>
                  <Typography variant="body2">Deposit Amt:
                    <div style={{fontWeight:"bold"}}> {fd.depositAmount}</div></Typography>
                  <Typography variant="body2">Tenure: <div style={{fontWeight:"bold"}}>{fd.tenure}</div></Typography>
                  <Typography variant="body2">Interest Rate: <div style={{fontWeight:"bold"}}>{fd.interestRate}</div></Typography>
                  </div>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between " gap="8px">
                <Button style={{flex:1}} variant="contained" color="primary">{fd.primaryAction}</Button>
                <Button style={{flex:1}} variant="outlined" color="primary">{fd.secondaryAction}</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FDCardsdate;
