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
    // console.log(props)
    return (
        <Container>
            <TextCard {...props} />
        </Container>
    );
};

Comments.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
};

export default Comments;
