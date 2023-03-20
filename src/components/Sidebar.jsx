import React from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import CollectionsIcon from '@mui/icons-material/Collections';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import GroupIcon from '@mui/icons-material/Group';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { capitalizedWord } from '../helpers/textUtils';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/slices/auth';

const iconColor = {
    color: 'black',
};

export const routes = [
    {
        route: 'posts',
        icon: <AllInboxIcon sx={iconColor} />,
    },
    {
        route: 'comments',
        icon: <ForumIcon sx={iconColor} />,
    },
    {
        route: 'albums',
        icon: <CameraRollIcon sx={iconColor} />,
    },
    {
        route: 'photos',
        icon: <CollectionsIcon sx={iconColor} />,
    },
    {
        route: 'todos',
        icon: <TaskAltIcon sx={iconColor} />,
    },
    {
        route: 'users',
        icon: <GroupIcon sx={iconColor} />,
    },
];

const useStyles = {
    menuSliderContainer: {
        width: 240,
        background: 'linear-gradient(black, gray)',
        // color: 'black',
        height: '100%',
        display: 'flex',
        // position: 'absolute',
        flexDirection: 'column',
        paddingTop: '30%',
        // justifyContent: 'center',
        pointerEvents: 'all',
        // gridColumn: '1 / 2',
        // gridRow: '1'
        // position: 'relative'
    },
    listItem: {
        color: 'black',
    },
};

const Sidebar = ({ route }) => {
    const classes = useStyles;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = (routeSidebar) => {
        if (route !== routeSidebar) navigate(`/${routeSidebar}?page=1`);
    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(logoutUser());
                localStorage.removeItem('user');
                navigate('/auth/login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMsg = error.message;
                console.log(errorCode, errorMsg);
            });
    };

    const sideList = () => (
        <nav style={classes.menuSliderContainer}>
            <ul
                style={{
                    // backgroundColor: 'red',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px',
                    padding: '0',
                }}
            >
                {routes.map((listItem, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(listItem.route)}
                        style={{
                            backgroundColor: 'white', //light gray hover and white selected
                            borderRadius: '10px',
                            // margin: '0px 5px',
                            display: 'flex',
                            // justifyContent: 'flex-end',
                            // border: '1px solid blue',
                            alignItems: 'center',
                            padding: '5px 5px 5px 10px',
                            // paddingLeft: '10px',
                            width: '70%',
                            cursor: 'pointer',
                            // color: 'black'
                        }}
                    >
                        <ListItemIcon>{listItem.icon}</ListItemIcon>
                        <ListItemText
                            primary={capitalizedWord(listItem.route)}
                        />
                    </li>
                ))}
                <li
                    onClick={logOut}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '5px 5px 5px 10px',
                        // paddingLeft: '10px',
                        gap: '10px',
                        cursor: 'pointer',
                        color: 'white',
                    }}
                >
                    <PowerSettingsNewIcon />
                    <ListItemText primary="Log out" />
                </li>
            </ul>
        </nav>
    );

    return <aside>{sideList()}</aside>;
};

Sidebar.propTypes = {
    route: PropTypes.string.isRequired,
};

export default Sidebar;
