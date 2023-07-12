import React from 'react';
import Box from '@mui/material/Box';
import TaskBar from './TaskBar';
import Desktop from './Desktop';
import Welcome from './Welcome';

function App() {

  return (
   
    <Box
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    width={"100%"}
    height={"100vh"}
    >
      <div className="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
      <Welcome />
      <Desktop />
      <TaskBar />
    </Box>
  )
}

export default App
