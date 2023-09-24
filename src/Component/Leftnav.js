import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Card, CardHeader, Container, Stack , Avatar, AvatarGroup, Slider, Button, MenuItem, MenuList} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CustomCard } from './CustomCard';
import WestIcon from '@mui/icons-material/West';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import PersonIcon from '@mui/icons-material/Person';
import CommentIcon from '@mui/icons-material/Comment';
import Menu from '@mui/icons-material/Menu';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));


const CardContainer1 =  styled("div")(({theme})=>({
  
  display:"flex",
  flexDirection:"column",
  gap:"10px",
  margin:'20px auto',
  marginTop:"80px",
  
  
}))

const CardContainer =  styled("div")(({theme})=>({
  margin:"10px 20px",
  display:"flex",
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent: 'space-evenly',
  gap:"5px",
  backgroundColor:"#27005D",
  borderRadius:"5px",
  padding:"40px 10px",
  [theme.breakpoints.down('md')]:{
    flexDirection:"column",
    padding:"40px 20px",
    margin : "10px auto"
    
  }

}))

const FirstRow = styled("div")(({theme})=>({
  width:'80vw',
  backgroundColor:"#27005D",
  display:"flex",
  flexDirection:"row",
  flexWrap:"wrap",
  justifyContent:"space-between",
  color:"white",
  padding:"20px 10px",
  borderRadius:"5px",
  margin:"20px",
  gap:"15px",
  
  [theme.breakpoints.down('md')]:{
    flexDirection:"column",
    width:"70vw",
    margin:"20px 10px",
  }

}))



const Popup = styled("div")(({theme})=>({
  width:'80vw',
  backgroundColor:"#27005D",
  display:"flex",
  flexDirection:"row",
  flexWrap:"wrap",
  justifyContent:"space-between",
  color:"white",
  padding:"20px 10px",
  borderRadius:"5px",
  margin:"20px",
  gap:"10px 20px",
  
  [theme.breakpoints.down('md')]:{
    flexDirection:"column",
    width:"70vw",
    margin:"20px 10px",
  }

}))

const SecondRow = styled("div")(({theme})=>({
  width:'80vw',
  backgroundColor:"#27005D",
  display:"flex",
  flexDirection:"row",
  flexWrap:"wrap",
  justifyContent:"space-between",
  color:"white",
  padding:"20px 10px",
  margin:"20px",
  gap:"15px",
  
  [theme.breakpoints.down('md')]:{
    flexDirection:"column",
    width:"70vw",
    margin:"20px 10px",
  }

}))

const FirstRsC = styled("div")(({theme})=>({
  display:"flex",
  flexDirection:"row",
  paddingLeft:"40px",
  paddingTop:"20px",
  flexWrap:'wrap',
  gap:"10px",
  justifyContent:"center",
  
  [theme.breakpoints.down('md')]:{
    flexDirection:"column",
    padding:"10px",
    justifyContent:"center",
    alignItems:"center",
    
    margin:"10px"
    
  }

}))

const Smallcard = styled("div")(({theme})=>({
  display:"flex",
  flexDirection:"row",
  flexWrap:'wrap',
  backgroundColor:"orange"

}))

export  function Leftnav() {
  const theme = useTheme();
  const [open1, setopen1] =  React.useState(false)

  const [open, setOpen] = React.useState(false);

  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpen = ()=>{
    open1 ? setopen1(false) : setopen1(true)
  }

  const handleClose = ()=>{
    setopen1(false)
  }

  

  const card1 = [
    {title:"Important", body:"This is my store please complete it ", Due_day:"2", sildingvalue :"40" },
    {title:"Database", body:"This is my store please complete it ", Due_day:"3", sildingvalue :"40" },
    {title:"Important", body:"This is my store please complete it ", Due_day:"10", sildingvalue :"40" },
    {title:"Important", body:"This is my store please complete it ", Due_day:"4", sildingvalue :"40" }
  ]

  const card2 = [
    {title:"Important", body:"This is my store please complete it ", Due_day:"1", sildingvalue :"40" },
    {title:"Instruction", body:"This is my store please complete it ", Due_day:"2", sildingvalue :"40" },
    
  ]


  const card3 = [
    {title:"Important", body:"This is my store please complete it ", Due_day:"1", sildingvalue :"40" },
    {title:"Important", body:"This is my store please complete it ", Due_day:"4", sildingvalue :"40" },
    {title:"Important", body:"This is my store please complete it ", Due_day:"2", sildingvalue :"40" }
  ]

  const card4 = [
    
  ]



 
  

  return (
    <Box sx={{ display: 'flex', backgroundColor:"#713ABE", width:"100vw" }}>
      <AppBar position="fixed" open={open} sx={{backgroundColor:"#27005D",color:"white"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>


      <Drawer variant="permanent" open={open} >
        <DrawerHeader sx={{backgroundColor:"#27005D",color:"white"}}>

          <Stack direction={'row'} spacing={10} >
          <Typography variant='h6' paddingTop={'5px'}>MernStack</Typography>

          
          <IconButton onClick={handleDrawerClose} sx={{color:"#5B0888"}}>
            {theme.direction === 'rtl' ? <MenuIcon  /> : <MenuIcon />}
          </IconButton>
          </Stack>
        </DrawerHeader>
        <Divider />
        <List sx={{backgroundColor:"#27005D",color:"white"}}>
          {['Inbox', 'Starred', 'Send email', 'Drafts','Inbox', 'Starred', 'Send email', 'Drafts', 'Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon 
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color:"white"
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon  /> : <MailIcon  />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open  ? 1 : 0  }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
       
       
      </Drawer>

      <CardContainer1>
        
          <FirstRow>
            <Stack direction={'column'}>
            <Stack direction={'row'} spacing={2}>
              <WestIcon  sx={{backgroundColor:"grey", padding:"5px", borderRadius:"25px"}}/>
              <Stack direction={'column'}>
                <Typography variant='h6'>School November Task</Typography>
                <Typography color={'grey'}>Create by Instruction </Typography>
              </Stack>
            </Stack>

            <FirstRsC >
              <AvatarGroup sx={{paddingTop:"5px"}}>
                <Avatar src='' alt='oh baby' sx={{ width: 24, height: 24 }}/>
                <Avatar src='' alt='oh baby'sx={{ width: 24, height: 24 }}/>
                <Avatar src='' alt='oh baby' sx={{ width: 24, height: 24 }}/>
                <Avatar src='' alt='oh baby'sx={{ width: 24, height: 24 }}/>
              </AvatarGroup>

              <Button  variant="contained" startIcon={<PersonIcon/>}> Invite People</Button>
              <Button  variant="outlined"   sx={{color:"white"}}>Private</Button>
              <Button variant="contained" >Edit</Button>
              <Button  variant="outlined" startIcon={<CommentIcon/>} sx={{color:"white"}}> 45 Comments </Button>
              
             
            </FirstRsC>

            </Stack>


            <Stack direction={'column'} spacing={2}>
            <Stack direction={'row'} spacing={2} sx={{marginLeft:"20px"}}>
              <Stack direction={'column'}>
                <Typography variant='h6'>School November Task</Typography>
                <Typography color={'grey'}>Create by Instruction </Typography>
              </Stack>
              <TripOriginIcon  sx={{backgroundColor:"white", padding:"15px", borderRadius:"10px", color:"orange"}}/>
              <MoreVertIcon  sx={{color:"white", paddingTop:"15px"}}/>
              
            </Stack>


            <Stack direction={'row'} spacing={2} sx={{ display:"flex", flexWrap:"wrap", margin:'20px', gap:"10px"}}>
              <Typography >
                Total Progress
              </Typography>
              <Slider   defaultValue={4 } aria-label="Small"  valueLabelDisplay="auto" sx={{width:'50%'}}  />
            </Stack>
            </Stack>

          </FirstRow> 
          <Popup>
          
            <Typography >MenuBar</Typography>

            <Stack>
              <MoreHorizIcon onClick={handleOpen} sx={{cursor:"pointer" , padding:"5px 11px", backgroundColor:"orange",borderRadius:"5px" }}>

            </MoreHorizIcon>
            <MenuList  sx={{ opacity: open1 ? 1 : 0, backgroundColor:"orange", color:"white", borderRadius:"5px", padding:"5px 10px" , mt:"40px", position:"absolute", zIndex:5}} onClick={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </MenuList>
            </Stack>

           
          </Popup>

          <CardContainer>
            <CustomCard CardHeading={'To-Do List(12)'} card1={card1} />
            <CustomCard CardHeading={'To-Do List(12)'} card1={card2} />
            <CustomCard CardHeading={'To-Do List(12)'} card1={card3} />
            <CustomCard CardHeading={'To-Do List(12)'} card1={card4} />


            
          </CardContainer>

          
          
         
      </CardContainer1>

      





     

     





      

      

      
      




      

     

    </Box>
    
  );
}
