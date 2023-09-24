import React, { useState } from 'react';
import { AppBar,Paper, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Toolbar, Typography, styled, InputBase, Badge, Stack, Avatar, TextField, Drawer} from '@mui/material';
import WebhookIcon from '@mui/icons-material/Webhook';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MailIcon from '@mui/icons-material/Mail';


import Notifications from '@mui/icons-material/Notifications';

const StyleToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent: 'space-between',
  backgroundColor: "blue",
  width:"83.9vw",
  marginLeft:"15vw"
 
})

const StyleGrid = styled(Grid)({
  display:"flex",
  flexDirection:"row"
  
})

const ButtonHub = styled(Button)({
  backgroundColor:"blue", 
  color:"white",
  justifyContent:"center",
  borderRadius:"none",
  margin:"20px",
  "&:hover":{
    backgroundColor:"orange"
},

})

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  
  color: theme.palette.text.secondary,
}));


const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"5px 10px",
  borderRadius:"5px",
  alignItems:"center",
  padding:" 5px 10px",
  width:"50%"

}))

const Icon = styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:'flex'
  }
  

}))

const Userbox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:'none'
  }
  

}))

const Inputfield = styled("div")(({theme})=>({
  display:"flex",
  flexDirection:"column",
  border:"0.2px solid grey",
  padding:"10px 20px",
  alignItems:"center",
  gap:"20px",



}))



export function Main(){


 

  const [open, setOpen] = useState(false)

  return(
    <>
    <Drawer>

        
    </Drawer>


    <AppBar position='sticky' >
      <StyleToolbar>
        <Typography variant='h4' sx={{display:{xs:'none', md:'block'}}}>MernStack</Typography>
        <WebhookIcon sx={{display:{xs:'block', md:'none'}}}/>
        <Search>
          <InputBase placeholder='Search...'   sx={{width:"100%"}}/>
        </Search>





        <Icon >
          <Badge  badgeContent={4} color="primary">
            <MailIcon/>
          </Badge>
          <Badge  badgeContent={4} color="primary">
            <Notifications/>
          </Badge>
          <Avatar sx={{width:"30px", height:"30px"}} src='https://images.pexels.com/photos/17785487/pexels-photo-17785487/free-photo-of-sunset-in-porto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
        </Icon>

        <Userbox  onClick={()=>setOpen(true)}>
          
          <Avatar sx={{width:"30px", height:"30px"}} src='https://images.pexels.com/photos/17785487/pexels-photo-17785487/free-photo-of-sunset-in-porto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
          <Typography>Arjun</Typography>
        </Userbox>



        
        

        
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={e=>setOpen(false)}
        open={open}
       
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
       
        <MenuItem>Account</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </StyleToolbar>
    </AppBar>
  
    </>
  )
}



