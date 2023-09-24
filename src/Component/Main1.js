import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { AppBar, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

const Header = styled(AppBar)(({theme})=>({
    backgroundColor:"grey",
    width:"85%",
    height:"80px",
    [theme.breakpoints.down('md')]:{
        width:"100%"
    }

}))


const Sidebar = styled(Drawer)(({theme})=>({

   
    display:"flex",
    flexDirection:"column",
   
    height:"100%",
    [theme.breakpoints.down('md')]:{
        position:"absolute",
       

    }
    

}))
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


export  const  Main1 = ()=>{

    const [open, setOpen] = useState(false)
    const handle = () =>{
        open ? setOpen(false): setOpen(true)
    }
    return(
        <>
        <Box sx={{backgroundColor:"orange", width:"100vw", height:"100vh"}}>

            <Header position="fixed" open={true} >

            </Header>
            
            <Drawer variant="permanent" open={false} sx={{bgcolor:"grey"}}>
                <Stack direction={'row'} sx={{margin:"20px auto", bgcolor:"grey"}} spacing={2}>
                <Typography variant='h5' sx={{display:{xs:'none', md:"block"}}}>MernStack</Typography>
                <MenuIcon fontSize="large"  onClick={handle} />
                       

                </Stack>


                <ListItem  sx={{bgcolor:"grey"}} >
                    <ListItemButton>
                        <ListItemIcon > 
                            <HomeIcon fontSize="large"/>
                        </ListItemIcon>
                        <Typography variant='h5' sx={{display:{xs:'none', md:"block"}}}>MernStack</Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem  sx={{bgcolor:"grey"}} >
                    <ListItemButton>
                        <ListItemIcon > 
                            <HomeIcon fontSize="large"/>
                        </ListItemIcon>
                        <Typography variant='h5' sx={{display:{xs:'none', md:"block"}}}>MernStack</Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem  sx={{bgcolor:"grey"}} >
                    <ListItemButton>
                        <ListItemIcon > 
                            <HomeIcon fontSize="large"/>
                        </ListItemIcon>
                        <Typography variant='h5' sx={{display:{xs:'none', md:"block"}}}>MernStack</Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem  sx={{bgcolor:"grey"}} >
                    <ListItemButton>
                        <ListItemIcon > 
                            <HomeIcon fontSize="large"/>
                        </ListItemIcon>
                        <Typography variant='h5' sx={{display:{xs:'none', md:"block"}}}>MernStack</Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem  sx={{bgcolor:"grey"}} >
                    <ListItemButton>
                        <ListItemIcon > 
                            <HomeIcon fontSize="large"/>
                        </ListItemIcon>
                        <Typography variant='h5' sx={{display:{xs:'none', md:"block"}}}>MernStack</Typography>
                    </ListItemButton>
                </ListItem>

                
                
                

            </Drawer>

            

        </Box>
        


        
        </>
    )
}