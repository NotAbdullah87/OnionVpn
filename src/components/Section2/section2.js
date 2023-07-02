import React from 'react'
import { Typography, Button, Container, Grid ,Paper} from '@mui/material';
import illus from './Illustration 2.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Section2 = () => {
  return (
    <Container>
         <Grid maxWidth={"90%"} mt={"20px"} ml={"20px"} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img
            src={illus}
            alt="Image"
            
            width={"100%"}
            sx={{ 
              height: "auto",
              padding: "0",
              margin: "0"}}
          />
        </Grid>
        <Grid ml={"0px"} mt={"30px"} item xs={12} sm={6}>
          <div >
            <Typography variant="h4" fontFamily={"poppins"} fontWeight={600}>
            We Provide Many<br></br> Features You Can Use
            </Typography>
            <Typography maxWidth={"80%"} sx={{mt:"20px",fontFamily:"poppins",color:"#4F5665"}}>You can explore the features that we provide with fun and have their own functions each feature.</Typography>
          </div>
        
        <Container  sx={{display:"flex",mt:"40px"}} >
            <CheckCircleIcon sx={{color : "#2FAB73",mr:"15px"}}/> 
            <Typography color={"#4F5665"}>Powerfull online protection.</Typography>
        </Container>
        
        <Container  sx={{display:"flex",mt:"20px"}} >
            <CheckCircleIcon sx={{color : "#2FAB73",mr:"15px"}}/> 
            <Typography color={"#4F5665"}>Internet Without Borders</Typography>
        </Container>

        <Container  sx={{display:"flex",mt:"20px"}} >
            <CheckCircleIcon sx={{color : "#2FAB73",mr:"15px"}}/> 
            <Typography color={"#4F5665"}>Supercharged VPN</Typography>
        </Container>
        
        <Container  sx={{display:"flex",mt:"20px"}} >
            <CheckCircleIcon sx={{color : "#2FAB73",mr:"15px"}}/> 
            <Typography color={"#4F5665"}>No Specific Time Limits</Typography>
        </Container>
        

        </Grid>
      </Grid>
    </Container>
  )
}

export default Section2