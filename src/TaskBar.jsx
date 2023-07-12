import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { LuHome } from "react-icons/lu";
import CheckIcon from "@mui/icons-material/Check";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BugReportIcon from '@mui/icons-material/BugReport';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Stack } from "@mui/material";
import cert1 from './assets/cert1.png'
import cert2 from './assets/cert2.png'
import cert3 from './assets/cert3.png'
import about from './assets/about.png'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';



function TaskBar() {
  const [currentTime, setCurrentTime] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [portfolioMenuOpen, setPortfolioMenuOpen] = useState(false);
  const [portfolioMenuAnchorEl, setPortfolioMenuAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const handleCloseAll = () => {
    handleClose();
    handlePortfolioMenuClose();
  };

  const handlePortfolioMenuOpen = (event) => {
    setPortfolioMenuOpen(true);
    setPortfolioMenuAnchorEl(event.currentTarget);
  };

  const handlePortfolioMenuClose = () => {
    setPortfolioMenuOpen(false);
    setPortfolioMenuAnchorEl(null);
  };

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      const date = new Date();
      const timeString = date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);

  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);

  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
        
      }
    }
  }, [open]);

  return (
    <Box
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="rgba(165, 203, 224, 0.5)"
      border="1px solid black"
      p={1}
    >
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          ml: "5px",
          opacity: "1 !important",
          padding: 0,
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          padding={0}
          style={{
            transform: [
              {
                translateY: -2,
              },
            ],
          }}
        >
          <LuHome
            style={{
              fontSize: "25px",
              fontWeight: "400",
              border: "2px solid rgb(139, 86, 254)",
              borderRadius: "50%",
              padding: "5px",
              color: "black",
            }}
            className="hover"
          />
        </Box>
      </Button>
     
      <Menu
        sx={{
          transform: "translateY(-40px)",
          "& .MuiPaper-root": {
            width: "200px",
            bgcolor: "rgba(165, 203, 224, 0.9)",
          },
        }}
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseAll}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
          //move menu up 5px
        }}
      >
         <Dialog
          open={open}
          onClose={handleCloseAll}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          fullWidth={true}
          maxWidth={"lg"}
         
         
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent  dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
              
            >
                <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
                >
               <Typography variant="h2" fontWeight={500} fontSize={50} fontFamily={"Oswald"}>
            Who the hell is this guy?
        </Typography>
        <Typography fontSize={20} fontFamily={"Oswald"} mb={4}>
            (seriously...)
        </Typography>
        <img 
        onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.transition = "all 0.5s ease-in-out";
            e.target.style.cursor = "pointer";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.cursor = "pointer";
          }}
        src={about} alt="about" style={{
            width: '30%',
             height: 'auto',
              borderRadius: 250,
               border: '4px dashed black ',
                boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.2)',
                
                }}/>
        <QuestionMarkIcon sx={{ fontSize: 50 }} />
        
        <Typography variant="p" fontFamily={'Oswald'} fontSize={18}>
        Greetings, fellow internet adventurers! I'm Sean, a web developer with a knack for turning coffee into code and ideas into interactive digital experiences. With 8 years of experience navigating the treacherous seas of web development, I'm here to bring a touch of humor and a truckload of expertise to your online presence.
        </Typography>
        <Typography variant="h3" fontFamily={'Oswald'} mt={6} mb={2} >
            My Superpowers
        </Typography>
        <FlashOnIcon sx={{ fontSize: 50 }} />
        <Typography variant="p" fontFamily={'Oswald'} fontSize={18}>
        I wield the mystical powers of HTML, CSS, and JavaScript, harnessing their combined might to create visually stunning websites that are as captivating as a magic show. From crafting pixel-perfect designs to wrangling browsers like wild stallions, I've tamed the web development circus to create seamless user experiences.
        </Typography>
        <Typography variant="h3" fontFamily={'Oswald'} mt={6} mb={2} >
        The Wizard Behind the Curtain
        </Typography>
        <MenuBookIcon sx={{ fontSize: 50 }} />
        <Typography variant="p" fontFamily={'Oswald'} fontSize={18} mb={2}>
        When it comes to front-end development, I'm like a wizard concocting spells with frameworks such as React, Angular, and Vue.js. With a wave of my keyboard, I can bring static designs to life, making websites dance, sing, and perform tricks that would make Houdini proud.
        </Typography>
        <Typography variant='p' fontFamily={'Oswald'} fontSize={18}>
        But that's not all! I have a secret identity as a back-end maestro. Armed with the powers of Node.js and Python, I can create server-side sorcery that allows your web applications to scale to new heights. Databases like MySQL and MongoDB tremble at my commands as I conjure efficient data storage solutions.
        </Typography>
        <Typography variant="h3" fontFamily={'Oswald'} mt={6} mb={2} >
        Debugging... The Never-Ending Adventure
        </Typography>
        <BugReportIcon sx={{ fontSize: 50 }} />
        <Typography variant="p" fontFamily={'Oswald'} fontSize={18}>
        As a web developer, I embark on epic quests to slay the fearsome bugs that roam the digital realm. Armed with the legendary sword of Stack Overflow and a shield forged from error messages, I fearlessly dive into the depths of code to vanquish any issues that dare to disrupt the harmony of your website.
        </Typography>
        <Typography variant="h3" fontFamily={'Oswald'} mt={6} mb={2} >
        Laughter is the Best Syntax
        </Typography>
        <EmojiEmotionsIcon sx={{ fontSize: 50 }} />
        <Typography variant="p" fontFamily={'Oswald'} fontSize={18}>
        While my code may be serious business, I believe that laughter is the best syntax. I sprinkle humor into my work, ensuring that your users have a smile-inducing experience while browsing your site. From clever animations to witty error messages, I believe that a little humor goes a long way in creating memorable digital adventures.
        </Typography>
        <Typography variant="h3" fontFamily={'Oswald'} mt={6} mb={2} >
        Let's Join Forces
        </Typography>
        <HandshakeIcon sx={{ fontSize: 50 }} />
        <Typography variant="p" fontFamily={'Oswald'} fontSize={18}>
        If you're ready to embark on a whimsical web development journey filled with laughter and awe-inspiring digital creations, let's join forces! Together, we can weave an enchanting online presence that will captivate your audience and leave them spellbound.

Reach out to me through the contact information below, and let's start crafting a web experience that will make your competitors green with envy (or maybe just green, if you prefer a more eco-friendly approach).
        </Typography>
        </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAll}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
        <MenuItem onClick={handleClickOpen("paper")}>
       
          <Typography
            textTransform={"none"}
            color={"black"}
            fontFamily={"Ubuntu"}
            fontWeight={"400"}
            variant="p"
            fontSize={"16px"}
          >
            About
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography
            textTransform={"none"}
            color={"black"}
            fontFamily={"Ubuntu"}
            fontWeight={"400"}
            variant="p"
            fontSize={"16px"}
          >
            Blog
          </Typography>
        </MenuItem>
        <MenuItem onClick={handlePortfolioMenuOpen}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
          >
            <Typography
              textTransform={"none"}
              color={"black"}
              fontFamily={"Ubuntu"}
              fontWeight={"400"}
              variant="p"
              fontSize={"16px"}
            >
              Portfolio
            </Typography>
            <IoIosArrowForward
              style={{ fontSize: "20px", fontWeight: "400" }}
            />
          </Box>
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={portfolioMenuAnchorEl}
        open={portfolioMenuOpen}
        onClose={handlePortfolioMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        getContentAnchorEl={null}
        elevation={0}
        sx={{
          transform: "translateY(-40px)",
          "& .MuiPaper-root": {
            width: "200px",
            ml: "5px",
            bgcolor: "rgba(165, 203, 224, 0.9)",
          },
        }}
      >
        <MenuItem onClick={handleCloseAll}>Project 1</MenuItem>
        <MenuItem onClick={handleCloseAll}>Project 2</MenuItem>
        <MenuItem onClick={handleCloseAll}>Project 3</MenuItem>
      </Menu>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <TextField
          placeholder="Enter email to subscribe!"
          size="small"
          sx={{
            ml: 5,
            border: "1px solid rgb(139, 86, 254)",
            borderRadius: 2,
            bgcolor: "rgba(255, 255, 255, 0.3)",
          }}
        />
        <Button
          size="medium"
          sx={{ bgcolor: "rgb(139, 86, 254, .7)", ml: 1 }}
          variant="contained"
        >
          <CheckIcon />
        </Button>
      </Box>
      <Box display="flex" alignItems="center" mr={2}>
        <BsGithub
          className="hover-small"
          style={{ borderRadius: "50%", marginRight: "5px", cursor: "pointer" }}
        />
        <BsLinkedin
          className="hover-small"
          style={{ marginRight: "5px", cursor: "pointer" }}
        />
        <MdEmail
          className="hover-small"
          style={{ marginRight: "5px", fontSize: "20px", cursor: "pointer" }}
        />
        <IoEarthOutline
          className="hover-small"
          style={{ fontSize: "20px", cursor: "pointer" }}
        />
        <Typography
          fontFamily="Ubuntu"
          fontWeight="400"
          variant="h6"
          fontSize="18px"
          ml={2}
        >
          {currentTime}
        </Typography>
      </Box>
    </Box>
  );
}

export default TaskBar;
