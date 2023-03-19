import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import TextCard from './TextCard';

const Comments = ({ title, body, footer }) => {
    const props = {
        title,
        body,
        footer,
    };
    return (
        <Container>
            <TextCard {...props} />
        </Container>
    );
};

Comments.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
};

export default Comments;
