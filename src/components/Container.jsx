import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, width = '80%' }) => {
    return (
        <div className="container_box" style={{ width }}>
            {children || <></>}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
};

export default Container;
