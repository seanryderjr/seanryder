import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { TbWorldWww } from 'react-icons/tb';


function Desktop() {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            position={"absolute"}
            top={10}
            left={10}
           
        >
            <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mb={5}
            flexDirection={"column"}
            >
                <Button
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
                >
                <BsGithub className="hover"  style={{color:"black", borderRadius: "50%"}}  fontSize={"50px"} />
                <Typography textTransform={"none"} color={"black"} fontFamily={"Ubuntu"} fontWeight={"400"} variant="h6" fontSize={"18px"}>Github</Typography>
                </Button>
            </Box>

            <Box
             display={"flex"}
             justifyContent={"center"}
             alignItems={"center"}
             flexDirection={"column"}
            mb={5}

            >
                <Button
                 sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
                >
                <BsLinkedin className="hover"  style={{color:"black"}}  fontSize={"50px"} />
                <Typography textTransform={"none"} color={"black"}  fontFamily={"Ubuntu"} fontWeight={"400"} variant="h6" fontSize={"18px"}>LinkedIn</Typography>
                </Button>
            </Box>
            <Box
             display={"flex"}
             justifyContent={"center"}
             alignItems={"center"}
             flexDirection={"column"}
            mb={5}

            >
                <Button
                 sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                 }}>
                <MdEmail className="hover"  style={{color:"black"}} fontSize={"50px"} />
                <Typography textTransform={"none"} color={"black"} fontFamily={"Ubuntu"} fontWeight={"400"} variant="h6" fontSize={"18px"}>Email</Typography>
           </Button>
            </Box>
            <Box
             display={"flex"}
             justifyContent={"center"}
             alignItems={"center"}
             flexDirection={"column"}
            >
                <Button
                 sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                 }}
                >
                <TbWorldWww className="hover"  style={{color:"black"}} fontSize={"50px"} />
               
                <Typography textTransform={"none"} color={"black"} fontFamily={"Ubuntu"} fontWeight={"400"} variant="h6" fontSize={"18px"}>Website</Typography>
           </Button>
            </Box>

          
        </Box>
    )
}

export default Desktop