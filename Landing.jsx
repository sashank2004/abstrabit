import { Typography,Button } from "@mui/material"
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js/auto';
import './Timeline.css';
import FDItem from './FDItem';
import './App.css';
import dropdownicon from './images/belowicon.png';


Chart.register(ArcElement, Tooltip, Legend,ChartDataLabels);

function Landing(){
  const data = {
    labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
    datasets: [
      {
        label: 'Deposit Amt',
        data: [25000, 20000, 15000, 40000],
        backgroundColor: [
          '#4c6ef5',
          '#ffa500',
          '#9acd32',
          '#40e0d0'
        ],
        hoverOffset: 4,
      },
    ],
  };
  
  const options = {
    plugins: {
      
      legend: {
        display: true,
        position: 'right',
        labels:{
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      datalabels: {
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(2);
          return `${value.toLocaleString()} (${percentage}%)`;
        },
        color: 'white',
        font: {
          weight: 'bold',
          size:'8px'
        },
      },
    },
  };
  const months = [
    'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D',
    'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D',
    'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'
  ];
  
  const fdPlans = [
    { name: 'Utkarsh FD 1', start: '2024-01', end: '2024-07' },
    { name: 'Shriram FD Plan 2', start: '2024-01', end: '2025-04' },
    { name: 'Bajaj Finserv FD 1', start: '2024-05', end: '2025-03' },
    { name: 'Mahindra FD Plan 2', start: '2024-06', end: '2026-06' },
  ];
return <div style={{padding:"10px 20px",backgroundColor:"ButtonShadow"}}>
  <div style={{padding:"10px",fontWeight:"bold",fontSize:"20px"}}>
  Welcome, Johan Paul
  </div>
  <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
  <div style={{backgroundColor:"white",flex:1,height:"350px",padding:"5px"}}>
    <div style={{display:"flex",justifyContent:"space-between"}}><h3>Your FD Portfolio</h3>
     <Button style={{color:"black",borderColor:"black",padding:"-2px"}} variant="outlined">
        Deposit Amt
        <img className="dropdown-icon" src={dropdownicon}/>
      </Button></div>
     
     <div style={{marginTop:"-80px"}}>
     <Pie style={{margin:"none"}} data={data} options={options} />
     </div>
    </div>
    <div style={{backgroundColor:"white",flex:2}}>
    <div className="timeline">
      <div className="timeline-header">
        <div className="timeline-title">FD Maturity Timeline</div>
        <div className="timeline-years">
          <div className="timeline-year">2024</div>
          <div className="timeline-year">2025</div>
          <div className="timeline-year">2026</div>
        </div>
        <div className="timeline-months">
          {months.map((month, index) => (
            <div
              key={index}
              className="timeline-month"
              style={{ backgroundColor: index < 12 ? '#e0f7fa' : index < 24 ? '#e8f5e9' : '#fce4ec' }}
            >
              {month}
            </div>
          ))}
        </div>
      </div>
      <div className="timeline-background">
              <div style={{ backgroundColor: '#e0f7fa' }}></div>
              <div style={{ backgroundColor: '#e8f5e9' }}></div>
              <div style={{ backgroundColor: '#fce4ec' }}></div>
            </div>
      <div className="timeline-body">
        {fdPlans.map((plan, index) => (
          <FDItem key={index} name={plan.name} start={plan.start} end={plan.end} />
        ))}
      </div>
    </div>
    </div>
   </div>
</div>
}


export default Landing