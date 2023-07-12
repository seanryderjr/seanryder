import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import me from './assets/about.png';
import { LuHome } from 'react-icons/lu';
import CloseIcon from '@mui/icons-material/Close';

function Welcome() {
  return (
    <Box
    display={"flex"}
    justifyContent={"space-between"}
    alignItems={"center"}
    bgcolor={"rgba(165, 203, 224, 0.5)"}
    border="1px solid black"
    p={3}
    position={"absolute"}
    top={'5%'}
    left={'35%'}
    borderRadius={"20px"}
    width={500}
    flexDirection={"row"}
    boxShadow={"0px 0px 10px black"}

   
    >
      <hr style={{border: "1px solid black", width: "100%", position: "absolute", top: "20px", left: 0}} />
      <CloseIcon style={{color: "black", position: "absolute", top: "5px", right: 10}} />
      <img src={me} width={"150px"} style={{borderRadius: "50%", border: "5px solid rgb(139, 86, 254)"}} alt="" />
      <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      ml={2}
      textAlign={"center"}
      mt={2}
      >
      <Typography mb={2} variant="h6" fontFamily={'Ubuntu'}>
        Hey! I'm Sean. Welcome to my portfolio! I hope you enjoy it.
      </Typography>
      <Typography mb={2} fontFamily={'Ubuntu'}>
        I'm a full-stack web developer with a passion for creating
        beautiful, user-friendly interfaces. Use the icons to the left to view my Github, LinkedIn, Company website, and email.
      </Typography>
      <Typography fontFamily={'Ubuntu'}>
        Click the <LuHome style={{fontWeight:"bold"}} />  icon to see more about me, including projects and other info!
      </Typography>
      </Box>
    </Box>
  )
}


export default Welcome