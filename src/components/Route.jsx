import React from 'react';
import PropTypes from 'prop-types';
import Posts from './Posts';
import Comments from './Comments';
import Users from './Users';

const Route = ({ route, user, title, body, footer, userInfo }) => {
    const props = {
        user,
        title,
        body,
        footer,
        userInfo,
    };
    let element;
    switch (route) {
        case 'posts':
            element = <Posts {...props} />;
            break;
        case 'comments':
            element = <Comments {...props} />;
            break;
        case 'users':
            element = <Users {...props} />;
            break;
        default:
            element = <Posts {...props} />;
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
