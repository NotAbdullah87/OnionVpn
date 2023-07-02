import React from 'react'
import { Typography, Button, Container, Grid ,Box, IconButton} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
const footer = () => {
  return (
    <>
        <Container sx={{mt : "60px",mb:"50px"}}>

            <Box textAlign={"center"} sx={{
                borderRadius: "10px",
                background: "#FFF",
                boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                display : "flex",
                flexGrow : 1 , 
                pt : "50px", 
                pb :"50px", 
                pl : "10px",
                pr:"10px",
                //height : "80px",
                fontFamily :"poppins"
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography fontFamily={"poppins"} fontSize={"20px"} fontWeight={700}>Subscribe Now for Get Special Features!</Typography>
                        <Typography fontFamily={"poppins"}>Let's subscribe with us and find the fun.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button sx={{backgroundColor : "#F53838",color:"white",fontFamily:"poppins",borderRadius:"20px",width:"150px",'&:hover':{backgroundColor:"green"}}}>Subscribe</Button>                     
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Grid container spacing={2} sx={{mt:"20px"}}>
                    <Grid item xs={12} sm={6}>
                        <Box textAlign={"left"}>
                            <Typography fontFamily={"poppins"} fontWeight={600}>OnionVPN</Typography>
                            <Typography fontFamily={"poppins"} color={"#4F5665"} mt={"20px"}>OnionVPN is a private virtual network that has unique features and has high security.</Typography>
                            <FacebookIcon sx={{color:"#F53838" ,mt:"20px",mr:"20px"}}/>
                            <TwitterIcon sx={{color:"#F53838" ,mt:"20px",mr:"20px"}} />
                            <YouTubeIcon  sx={{color:"#F53838" ,mt:"20px",mr:"20px"}}/>
                            <Typography fontFamily={"poppins"} color={"#4F5665"} mt={"20px"}>©2023OnionVPN</Typography>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={4} sm={2}>
                       <Box>
                            <li style={{listStyle:"none",fontFamily:"poppins"}}>
                                <li style={{fontWeight:700}} >Product</li>
                                <li>Download</li>
                                <li>Pricing</li>
                                <li>Location</li>
                                <li>Server</li>
                                <li>Countries</li>
                                <li>Blog</li>
                            </li>
                        </Box> 
                    </Grid>

                      
                    <Grid item xs={4} sm={2}>
                       <Box>
                            <li style={{listStyle:"none"}}>
                                <li style={{fontWeight:700}} >Engage</li>
                                <li>OnionVPN ?</li>
                                <li>FAQ</li>
                                <li>Tutorials</li>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </li>
                        </Box> 
                    </Grid>

                      
                    <Grid item xs={4} sm={2}>
                       <Box>
                            <li style={{listStyle:"none"}}>
                                <li style={{fontWeight:700}} >Earn Money</li>
                                <li>Affiliate</li>
                                <li>Become Partner</li>
                               
                            </li>
                        </Box> 
                    </Grid>

                </Grid>
            </Box>

            <Box textAlign={"center"} sx={{mt:"20px"}}>
                <Typography fontFamily={"poppins"} >Developed With {<FavoriteIcon sx={{color:"red"}} />} by Abdullah Shakir</Typography>
                <IconButton href="https://www.linkedin.com/in/abdullah-shakir-107583217/" target='_blank'><LinkedInIcon sx={{color:"blueviolet",fontSize:"30px"}} /></IconButton>
                <IconButton href="https://wa.me/+923341863542" target="_blank" ><WhatsAppIcon  sx={{color:"blueviolet",fontSize:"30px"}} /></IconButton>
                <IconButton href='https://github.com/NotAbdullah87 ' target='_blank' ><GitHubIcon sx={{color:"blueviolet",fontSize:"30px"}} /> </IconButton>
            </Box>
{/* https://www.linkedin.com/in/abdullah-shakir-107583217/ */}
{/* https://github.com/NotAbdullah87 */}
        </Container>
    </>
  )
}

export default footer