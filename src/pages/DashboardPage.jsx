import React from 'react';
// import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import RightSide from '../components/RightSide';

const DashboardPage = ({ route }) => {
    return (
        <main className="dashboard-page">
            <Sidebar route={route} />
            <RightSide route={route} />
        </main>
    );
};

DashboardPage.propTypes = {
    route: PropTypes.string.isRequired,
};

export default DashboardPage;
