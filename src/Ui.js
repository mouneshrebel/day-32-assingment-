import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';

//Files are imported here//
import StuUi from './StuUi.js';
import Home from './Home.js';
import StuDetail from './StuDetail.js';
import EditStu from './EditStu.js';
import TeaUi from './TeaUi.js';
import TeaDetail from './TeaDetail.js';
import EditTea from './EditTea.js';
import AddStu from './AddStu.js';
import AddTea from './AddTea.js';


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
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
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
    })
);

export default function Ui() {
    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const click = () => {
        <div>
            console.log("clicked");
        </div>
    };



    return (

        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar style={{ backgroundColor: "black" }} position="fixed" open={open}>
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
                    <Typography variant="h6" noWrap component="div" style={{ fontFamily: 'cursive' }}>
                        Student Teacher Dashboard  &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button colorScheme='grey' onClick={()=>navigate('/addstudents')}> <GroupAddIcon/>&nbsp; Add Student👩🏻‍🎓 </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button colorScheme='grey' onClick={()=>navigate('./addteachers')}> <GroupAddIcon/>&nbsp; Add Teacher👨‍🏫 </Button>
                    </Typography>
                </Toolbar>



            </AppBar>
            <Drawer variant="permanent" open={open}  >
                <DrawerHeader style={{ backgroundColor: "grey" }}>
                    Options listed below👇👇
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List style={{ backgroundColor: "grey" }}>
                    {['Student', 'Teacher'].map((text, index) => (
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
                                    }}
                                >
                                    {index % 2 === 0 ? <PeopleRoundedIcon style={{ color: "black" }} onClick={() => navigate('/students')} /> : <SchoolRoundedIcon style={{ color: "black" }} onClick={() => navigate('/teachers')} />}
                                </ListItemIcon >

                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>

                        </ListItem>

                    ))}
                </List>

               

                <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Typography paragraph >

                    <Routes>
                        <Route path='/teachers' element={<TeaUi />} />
                        <Route path='/students' element={<StuUi />} />
                        <Route path='/studentdetail/:userid' element={<StuDetail />} />
                        <Route path='/teacherdetail/:userid' element={<TeaDetail />} />
                        <Route path='/editstudent/:userid' element={<EditStu />} />
                        <Route path='/editteacher/:userid' element={<EditTea />} />
                        <Route path='/addstudents' element={<AddStu />} />
                        <Route path='/addteachers' element={<AddTea />} />
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Typography>
            </Box>
        </Box>


    );
}
