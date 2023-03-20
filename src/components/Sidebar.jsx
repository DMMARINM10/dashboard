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

const Sidebar = ({ route }) => {
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
        <nav className="sidebar_container">
            <ul>
                {routes.map((listItem, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(listItem.route)}
                        className="sidebar_item"
                    >
                        <ListItemIcon>{listItem.icon}</ListItemIcon>
                        <ListItemText
                            primary={capitalizedWord(listItem.route)}
                        />
                    </li>
                ))}
                <li onClick={logOut} className="sidebar_logout">
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
