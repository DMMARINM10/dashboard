import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import RightSide from '../components/RightSide';

const DashboardPage = ({ route }) => {
    // useEffect(() => {
    //     const redball = document.createElement('div')
    //     redball.id = 'redball';
    //     redball.width = '30px';
    //     redball.height = '30px';
    //     redball.style.backgroundColor = 'red';
    //     document.body.appendChild(redball);
    //     const greenball = document.createElement('div')
    //     greenball.id = 'greenball';
    //     greenball.width = '30px';
    //     greenball.height = '30px';
    //     greenball.style.backgroundColor = 'red';
    //     document.body.appendChild(greenball);
    //     const blueball = document.createElement('div')
    //     blueball.id = 'blueball';
    //     blueball.width = '30px';
    //     blueball.height = '30px';
    //     blueball.style.backgroundColor = 'red';
    //     document.body.appendChild(blueball);
    //     const script = document.createElement('script');
    //     script.src = "/src/animations/backgroundAnimation.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    //   return () => {
    //       document.body.removeChild(script);
    //       document.body.removeChild(redball);
    //       document.body.removeChild(blueball);
    //       document.body.removeChild(greenball);
    //     }
    //   }, []);
    return (
        <main
            style={{
                display: 'grid',
                height: '100%',
                // position: 'absolute',
                // backgroundColor: 'green',
                gridTemplateColumns: '240px 1fr',
                gridTemplateRows: '1fr',
            }}
        >
            <Sidebar route={route} />
            <RightSide route={route} />
        </main>
    );
};

DashboardPage.propTypes = {
    route: PropTypes.string.isRequired,
};

export default DashboardPage;
