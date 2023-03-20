import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../components/forms/SignInForm';
import SignUpForm from '../components/forms/SignUpForm';

const AuthPage = ({ route }) => {
    return (
        <main className="auth-page_container">
            <section></section>
            <div className="auth-page_form">
                {route === 'login' ? <SignInForm /> : <SignUpForm />}
            </div>
        </main>
    );
};

AuthPage.propTypes = {
    route: PropTypes.string.isRequired,
};

export default AuthPage;
