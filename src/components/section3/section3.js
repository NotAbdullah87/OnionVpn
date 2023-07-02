import React from 'react'
import { Typography, Button, Container, Grid ,Paper,Box} from '@mui/material';
import BoxImg from './Free.svg';
import DoneIcon from '@mui/icons-material/Done';

const PlansBoxStyles = {                
border: "1.5px solid #DDD",
borderRadius : "10px",
padding : "40px",
}; 

const PlansText1 = {
    fontFamily : "poppins" , 
    fontWeight : 700 , 
    mt : "20px" , 
    mb : "20px" ,
};

const PlansIcon = {
    color : "#2FAB73", 
    mr : "25px" , 
    pb : "30px",
    pt : "10px" ,
}; 

const PlansDesc = {
    color : "#4F5665", 
    fontFamily : "poppins" , 
    fontWeight : 400 , 
    pt : "10px",
    pb : "30px", 
};

const PlansButton = { 
    borderRadius: "50px",
border: "2px solid #F53838",
color : "#F53838" ,
fontFamily : "poppins ", 
width : "177px",
}; 

const Section3 = () => {
  return (
   <Container sx={{
    background: "linear-gradient(180deg, #F8F8F8 0%, rgba(248, 248, 248, 0.00) 100%)",
    pt:"50px",
    mt : "20px"
    }} >

    <Box textAlign={"center"}>
        <Typography sx={PlansText1} >Choose Your Plan</Typography>
        <Typography>  Let's choose the package that is best for you and explore it happily and cheerfully.</Typography>
    </Box>


    {/* THE PLANS  */}
    <Grid pl={"20px"} pr={"20px"} mt={"20px"}  container spacing ={2} textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={12} sm={4} >
            <Box  sx={PlansBoxStyles}>
                <img
                    src ={BoxImg}
                >
                </img>
                <Typography sx={PlansText1} >Free Plan</Typography>
                
            

                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                    <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Unlimited Bandwidth</Typography>
                </Box>

                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Encrypted Conection</Typography>
                 </Box>

                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >No Traffic Logs</Typography>
                </Box>

                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Works on All Devices</Typography>
                 </Box>

                <Typography sx={PlansText1} >Free</Typography>

                <Button sx ={PlansButton}>Select</Button>

            </Box>
        </Grid>

        <Grid item xs={12} sm={4} >
            <Box sx={PlansBoxStyles}>
                <img
                    src ={BoxImg}
                >
                </img>
                <Typography sx={PlansText1}>Standard Plan</Typography>
                
                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Unlimited Bandwidth</Typography>
                    </Box>

                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Encrypted Connection</Typography>
                     </Box>

                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Yes Traffic Log</Typography>
                    </Box>

                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Connect Anywhere</Typography>
                    </Box>

                    <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Works on All Devices</Typography>
                    </Box>


                <Typography sx={PlansText1} >$9 / mo</Typography>

                <Button sx={PlansButton} >Select</Button>

            </Box>
        </Grid>

        <Grid  item xs={12} sm={4} >
            <Box sx={PlansBoxStyles}>
                <img
                    src ={BoxImg}
                >
                </img>
                <Typography sx={PlansText1} >Premium Plan</Typography>
                          
                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Unlimited Bandwidth</Typography>
                    </Box>

                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Encrypted Connection</Typography>
                     </Box>

                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Yes Traffic Log</Typography>
                    </Box>

                <Box display={"flex"}textAlign={"center"} alignItems={"center"} justifyContent={"center"}>
                <DoneIcon sx={PlansIcon} />
                    <Typography sx={PlansDesc} >Connect Anywhere</Typography>
                    </Box>

  
                
                <Typography sx={PlansText1} >$12 / mo</Typography>

                <Button sx={PlansButton} >Select</Button>

            </Box>
        </Grid>

    </Grid>
   </Container>
  )
}

export default Section3