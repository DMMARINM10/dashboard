import React from 'react'
import { ListItemIcon, ListItemText } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import CollectionsIcon from '@mui/icons-material/Collections';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import GroupIcon from '@mui/icons-material/Group';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// import { route } from '../data/routes'
// import Posts from './Posts';
import { useNavigate } from 'react-router-dom';

const iconColor = {
  color: 'black'
}

export const routes = [
  {
      route: 'posts',
      icon: <AllInboxIcon sx={iconColor}/>
  },
  {
      route: 'comments',
      icon: <ForumIcon sx={iconColor}/>
  },
  {
      route: 'albums',
      icon: <CameraRollIcon sx={iconColor}/>
  },
  {
      route: 'photos',
      icon: <CollectionsIcon sx={iconColor}/>
  },
  {
      route: 'todos',
      icon: <TaskAltIcon sx={iconColor}/>
  },
  {
      route: 'users',
      icon: <GroupIcon sx={iconColor}/>
  },
];

const useStyles = {
    menuSliderContainer: {
      width: 240,
      background: 'linear-gradient(black, gray)',
      // color: 'black',
      height: "100%",
      display: 'flex',
      // position: 'absolute',
      flexDirection: 'column',
      justifyContent: 'center',
      pointerEvents: 'all',
      // gridColumn: '1 / 2',
      // gridRow: '1'
      // position: 'relative'
    },
    listItem: {
      color: 'black'
    }
  };

const Sidebar = () => {
    const classes = useStyles;
    const navigate = useNavigate()
    const handleClick = (route) => {
      navigate(`/${route}`)
    }

    const sideList = () => (
      <nav style={classes.menuSliderContainer}>
        <ul style={{
          // backgroundColor: 'red',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          padding: '0'
        }}>

          {routes.map((listItem, index) => (
              <li key={index} onClick={() => handleClick(listItem.route)} style={{
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
                }}>
              <ListItemIcon>
                {listItem.icon}
              </ListItemIcon>
              <ListItemText primary={listItem.route} />
            </li>
          ))}
          <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px 5px 5px 10px',
                  // paddingLeft: '10px',
                  gap: '10px',
                  cursor: 'pointer',
                  color: 'white'
                }}>
                <PowerSettingsNewIcon />
              <ListItemText primary='Log out' />
            </li>
        </ul>
      </nav>
    );
  
    return (
        <aside>
            {sideList()}
        </aside>
    );
}

export default Sidebar