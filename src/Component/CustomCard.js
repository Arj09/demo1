import { Avatar, AvatarGroup, Box, Card, IconButton, Slider, Stack, Typography,  } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const CustomCard = ({CardHeading, CardCount, card1})=>{
    console.log(card1)
    
    return(
        <>
        <Stack direction={'column'} spacing={2}>

            <Stack direction={'row'} spacing={8} sx={{color:"white", borderRadius:"5px", justifyContent:"space-between", padding:"10px"}}>
                <Typography sx={{paddingTop:"10px", paddingLeft:"7px"}}>{CardHeading}</Typography>
                <IconButton >
                    <AddIcon  sx={{backgroundColor:"#5B0888", color: "white", borderRadius:"5px", padding:"5px"}} />
                </IconButton>
            </Stack >

            {
                card1.map((card)=>{
                    return(
                        <Box sx={{backgroundColor:"#5B0888", borderRadius:"8px", padding:"10px", margin:"5px 10px"}}>
                <Stack direction={'row'} sx={{justifyContent:"space-between", margin:"10px"}}>
                    <Typography sx={{color:"yellow"}}>{card.title}</Typography>
                    <MoreHorizIcon sx={{color:"white"}} />
                </Stack>
                <Typography sx={{padding:"2px 10px", color:"white"}}>
                        {card.body} 
                </Typography>
                <Slider   defaultValue={card.sildingvalue ? card.sildingvalue : 0 }   aria-label="Small"  valueLabelDisplay="auto"  sx={{width:"90%", color:"yellow", margin:"5px 10px"}} />
                <Stack direction={'row'} sx={{justifyContent:"space-between", margin:"5px 10px", alignItems:"center"}} >
                    <AvatarGroup max={10}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                            sx={{ width: 24, height: 24 }}  
                        />

                        <Avatar
                            alt="Remy Sharp"
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                            sx={{ width: 24, height: 24 }} 
                        />
                        <Avatar
                            alt="Remy Sharp"
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                            sx={{ width: 24, height: 24 }} 
                        />       

                    </AvatarGroup>

                    <Stack direction={'row'} spacing={0.5} sx={{color:"white"}}>
                        <AccessTimeIcon/>
                        <Typography>{`Due in ${card.Due_day} days`}</Typography>
                    </Stack>

                </Stack>
            </Box>
                    )
                })
            }

           

        </Stack>

        


        
        
        </>

    )
}