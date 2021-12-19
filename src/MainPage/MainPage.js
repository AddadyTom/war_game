import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@material-ui/core/Box';
import MuiDrawer from '@material-ui/core/Drawer';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import PaymentIcon from '@material-ui/icons/Payment';
import MapIcon from '@material-ui/icons/Map';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid'
import BackGround from '../SettingsStepper/Steps/BackGround';
import Chat from '../chat'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  color : 'white' ,
  backgroundImage : 'linear-gradient(#595CFF, #8BBEFC)',
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
  backgroundImage : 'linear-gradient(#595CFF, #8BBEFC)',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
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



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    backgroundImage : 'linear-gradient(45deg, blue, red);',
    flexShrink: 0,
    backgroundColor : 'black',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: 'flex'}} >
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style = {{ display : 'flex' , alignItems : 'center' , justifyContent : open  ? 'flex-end' : 'center'}}>
            {open ?
            <>
            <span style = {{position : 'relative' , right : '50%'}}>War-Net</span>
              <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon style = {{color : 'white'}}/> : <ChevronLeftIcon style = {{color : 'white'}}/>}
            </IconButton> </>: 
                      <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
            }
        
        </DrawerHeader>
        <Divider />
        <List>
          {['Chat', 'Resources', 'Map', 'Game Background'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <SendIcon style = {{color : 'white'}}/> :  index === 1 ? <PaymentIcon style = {{color : 'white'}}/> : index === 2 ? <MapIcon style = {{color : 'white'}}></MapIcon> : index === 3 ? <InfoIcon style = {{color : 'white'}}></InfoIcon> : <></>}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
    <div style = {{marginLeft : '250px' , width: '85%'}}>
    <Chat style = {{position : 'relative'}} user = {{name : 'yonatan' , pass: '1234'}}></Chat>
    </div>
   
    </>
  );
}
