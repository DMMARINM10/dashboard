import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return (
        <div
            style={{
                // border: '1px solid gray',
                marginBottom: '8px',
                boxShadow: '1px 1px 4px 1px gray',
                // backgroundColor: 'yellow',
                width: '80%',
                borderRadius: '20px',
                display: 'flex',
                height: '85px',
                // width: '80%'
            }}
        >
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;