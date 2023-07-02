import React from 'react'
import { Typography, Button, Container, Grid ,Paper,Box} from '@mui/material';
import Map from './Huge Global.png'; 
const section4 = () => {
  return (
    <Container sx={{
        mt:"80px", 
        textAlign : "center" 
    }} >

        <Typography textAlign={"center"} variant='h5' fontFamily={"poppins"} fontWeight={600} mb={"20px"}>
        Huge Global Network of Fast VPN
        </Typography>

        <Typography  sx={{mb:"90px"}} >
        See OnionVPN everywhere to make it easier for you when you move locations.
        </Typography>

        <img
            src = {Map}
       

            width={"80%"}
            sx={{ 
              height: "auto",
              padding: "0",
            
              //margin: "0",
            }}
        
        >
        </img>

    </Container>
   
  )
}

export default section4
