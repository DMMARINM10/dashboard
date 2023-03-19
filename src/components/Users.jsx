import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import ImageCard from './ImageCard';
import UserInfo from './UserInfo';

const Users = ({ user, userInfo }) => {
    return (
        <Container width={'70%'}>
            <ImageCard title={user} />
            <UserInfo userInfo={userInfo} />
        </Container>
    );
};

Users.propTypes = {
    user: PropTypes.string.isRequired,
    userInfo: PropTypes.object.isRequired,
};

export default Users;
