import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
// import { routes } from './Sidebar'
import { capitalizedText } from '../helpers/textUtils';
// import Posts from './Posts'

const RightSide = ({ route }) => {
    // const element = routes.find((r) => r.route === route).component
    // const card = route === 'albums' || route === 'photos'
    return (
        <section
            style={{
                // paddingLeft: '3%',
                // height: '100%',
                // backgroundColor: 'blue',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                height: '100%',
                // position: 'absolute',
                // right: '200px'
                // gap: '4px'
            }}
        >
            <span
                style={{
                    // backgroundColor: 'blue',
                    width: '100%',
                    paddingLeft: '5%',
                }}
            >
                <h1
                    style={{
                        fontSize: '30px',
                    }}
                >
                    {capitalizedText(route)}
                </h1>
            </span>
            <span
                style={{
                    // backgroundColor: 'blue',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: '5%',
                }}
            >
                {/* <input/> */}
            </span>
            <Table route={route} />
        </section>
    );
};

RightSide.propTypes = {
    route: PropTypes.string.isRequired,
};

export default RightSide;
