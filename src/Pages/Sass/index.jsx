import './index.css'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';


export default function UserDashboard() {
  return (
    <>
    <Box className="new">
      <Accordion sx={{ mt: 7, width: 1100, backgroundColor: 'skyblue' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography > <span className='head'>Default Workflow </span>  <span className='head1'>The is a default workflow</span></Typography>
        </AccordionSummary>
        
        <AccordionDetails>
       
          <Typography>

        <div className='div1'>
        <div className='div2'>
          <span>
          <Avatar sx={{backgroundColor:'blue' }}>0</Avatar>
          </span>
           Soured
        </div>
        <div className='div2'>
        <span>
          <Avatar sx={{backgroundColor:'blue' }}>1</Avatar>
          </span>
           Applied
        </div><div className='div2'>
        <span>
          <Avatar sx={{backgroundColor:'blue' }}>2</Avatar>
          </span>
           Matched
        </div><div className='div2'>
        <span>
          <Avatar sx={{backgroundColor:'blue' }}>3</Avatar>
          </span>
           Prescreen
        </div>
        <div className='div2'>
        <span>
          <Avatar sx={{backgroundColor:'blue' }}>4</Avatar>
          </span>
           Interview
        </div>
        </div>

        <div className='div1'>

        <div className='div2'>
        <span>
          <Avatar sx={{backgroundColor:'blue' }}>5</Avatar>
          </span>
           Test
        </div>
        <div className='div2'>
        <span>
          <Avatar sx={{backgroundColor:'blue' }}>6</Avatar>
          </span>
           ReferenceCheck
        </div><div className='div2'>
        <span>
          <Avatar sx={{backgroundColor:'blue' }}>7</Avatar>
          </span>
           Backcheck
        </div><div className='div2'>
        <span>
          <Avatar sx={{backgroundColor:'blue' }}>8</Avatar>
          </span>
           Offer
        </div>
        <div className='div2'>
        <span>
          <Avatar sx={{backgroundColor:'blue' }}>9</Avatar>
          </span>
          Hired <span><hr/></span> Rejected 
        </div>
        
        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
    </>
  );
}
