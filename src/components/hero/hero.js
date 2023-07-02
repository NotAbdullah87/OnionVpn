import React from 'react'
import { Typography, Button, Container, Grid ,Paper} from '@mui/material';
import illust1 from './Illustration 1.png';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorageIcon from '@mui/icons-material/Storage';

const Hero = () => {

    

  return (
    <>
     <Container >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}
            sx={{
                mt : "80px",
                fontFamily:"poppins"
            }}
          >
            <Typography fontWeight={600} fontFamily={'poppins'} variant="h3" component="h1" >
            Want anything to be easy with LaslesVPN.
            </Typography>
            <Typography variant="body1" fontFamily={'poppins'} mt={"20px"} color={"#4F5665"} fontSize={"16px"}>
            Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
            </Typography>
            <Button  variant="contained" color="primary" 
            sx={{fontFamily:"poppins",mt:"50px",
                    width:"250px",
                    height : "40px",
                    backgroundColor : "#F53838" ,     
                    boxShadow : "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    '&:hover':{
                        background: "#f00" 
                    },
                }}
    >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} mt={"60px"}>
            <img
              src={illust1}
              alt="Hero Image"
             
               width={"100%"}
              sx={{ 
                height: "auto",
                padding: "0",
                margin: "0"}}
            />
          </Grid>
        </Grid>
     

    
        <Grid  mt={"50px"} width={"80%"} ml={"9%"} sx={{backgroundColor:"#fff",boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",padding:"15px"}} display={"flex"} textAlign={"center"} justifyContent={"center"} container spacing={2}>
        <Grid mb={"20px"} item xs={12} sm={6} md={4} display={"flex"} textAlign={"center"} justifyContent={"center"}>
          <>
                <PersonIcon sx={{fontSize:"55px",backgroundColor:"#FFECEC",borderRadius:"50px",p :"5px",color:"#F53838",mr:"10px"}} />
                <Typography color={"#0B132A"} fontWeight={700} fontFamily={"poppins"} fontSize={"20px"} lineHeight={"25px"} mt={"5px"}>90+<br></br> Users</Typography>
          </>
        </Grid>
        <Grid mb={"20px"} display={"flex"} textAlign={"center"} justifyContent={"center"} item xs={12} sm={6} md={4}>
        <>
                <LocationOnIcon sx={{fontSize:"50px",backgroundColor:"#FFECEC",borderRadius:"50px",p :"5px",color:"#F53838",mr:"10px",ml:"0px"}} />
                <Typography color={"#0B132A"} fontWeight={700} fontFamily={"poppins"} fontSize={"20px"} lineHeight={"25px"} mt={"5px"}>30+<br></br>Locations</Typography>
          </>
        </Grid>
        <Grid mb={"20px"} display={"flex"} textAlign={"center"} justifyContent={"center"} item xs={12} sm={6} md={4}>
        <>
                <StorageIcon sx={{fontSize:"50px",backgroundColor:"#FFECEC",borderRadius:"50px",p :"5px",color:"#F53838",mr:"10px",ml:"0px"}} />
                <Typography color={"#0B132A"} fontWeight={700} fontFamily={"poppins"} fontSize={"20px"} lineHeight={"25px"} mt={"5px"}>30+<br></br>Locations</Typography>
          </>
        </Grid>
      </Grid>
      </Container>
      </>
  )
}

export default Hero