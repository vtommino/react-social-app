// import { Link, useNavigate } from 'react-router-dom'
import { AppBar, Box, Toolbar, IconButton, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function HomePage(){
    <Box flexGlow ={1}>
        <AppBar position='static'>
        <Toolbar
        sx={{
            display: 'flex',
            width: '100%',
            justifyContent:'space-between',
            alignItems:'center',
        }}
        >
            {/*Left*/}
            <Box display='flex' alignItems='center'gap='10px'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                    sx={{display:{xs:'none',sm:'block'}}}
                >

                    FakeBook
                </Typography>

            </Box>
            <Box>AVATAR</Box>
        </Toolbar> 
        </AppBar>
    </Box>
}


export default HomePage;