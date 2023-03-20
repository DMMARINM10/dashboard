import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../components/forms/SignInForm';
import SignUpForm from '../components/forms/SignUpForm';

const AuthPage = ({ route }) => {
    return (
        <main
            style={{
                // backgroundColor: 'yellow',
                height: '100%',
                width: '100%',
                // clipPath: 'polygon(0 0, 100% 0, 30% 100%, 0 100%)',
                // background: 'linear-gradient(black, gray)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <section
                style={{
                    // backgroundColor: 'yellow',
                    height: '100%',
                    width: '100%',
                    clipPath: 'polygon(0 0, 100% 0, 30% 100%, 0 100%)',
                    background: 'linear-gradient(black, gray)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            ></section>
            <div
                style={{
                    backgroundColor: 'white',
                    // height: '300px',
                    width: '300px',
                    position: 'absolute',
                    boxShadow: '2px 0px 5px 2px white',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2%',
                }}
            >
                {route === 'login' ? <SignInForm /> : <SignUpForm />}
            </div>
        </main>
    );
};

AuthPage.propTypes = {
    route: PropTypes.string.isRequired,
};

export default AuthPage;
