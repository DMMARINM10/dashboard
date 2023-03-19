import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import ImageCard from './ImageCard';
import TextCard from './TextCard';

const Posts = ({ user, title, body }) => {
    const props = {
        title,
        body,
    };
    return (
        <Container>
            <ImageCard title={user} />
            <TextCard {...props} />
        </Container>
    );
};

Posts.propTypes = {
    user: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default Posts;