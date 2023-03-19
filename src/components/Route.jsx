import React from 'react';
import PropTypes from 'prop-types';
import Posts from './Posts';
import Comments from './Comments';

const Route = ({ route, user, title, body, footer }) => {
    const props = {
        user,
        title,
        body,
        footer,
    };
    let element;
    switch (route) {
        case 'posts':
            element = <Posts key={route} {...props} />;
            break;
        case 'comments':
            element = <Comments key={route} {...props} />;
            break;
        default:
            element = <Posts key={route} {...props} />;
            break;
    }

    return element;
};

Route.propTypes = {
    route: PropTypes.string.isRequired,
    user: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
};

export default Route;
