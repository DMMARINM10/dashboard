import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignUpSchema } from '../../helpers/validations';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={SignUpSchema}
                onSubmit={async (values, actions) => {
                    if (values.password !== values.confirmPassword) {
                        setError(true);
                        actions.setSubmitting(false);
                    } else {
                        setError(false);
                        const { email, password } = values;
                        await createUserWithEmailAndPassword(
                            auth,
                            email,
                            password
                        )
                            .then(() => {
                                navigate('/auth/login');
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMsg = error.message;
                                console.log(errorCode, errorMsg);
                                actions.setSubmitting(false);
                            });
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="sign_form">
                        <div className="sign_input-container">
                            <Field
                                className="sign_input"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="sign_error-container">
                            <ErrorMessage
                                className="sign_error"
                                name="email"
                                component="div"
                            />
                        </div>
                        <div className="sign_input-container">
                            <Field
                                className="sign_input"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="sign_error-container">
                            <ErrorMessage
                                className="sign_error"
                                name="password"
                                component="div"
                            />
                        </div>
                        <div className="sign_input-container">
                            <Field
                                className="sign_input"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm password"
                            />
                        </div>
                        <div className="sign_error-container">
                            <ErrorMessage
                                className="sign_error"
                                name="confirmPassword"
                                component="div"
                            />
                        </div>
                        <div className="sign_extra-error">
                            {error && <span>Passwords must match</span>}
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        <a href="/auth/login">Login</a>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default SignUpForm;
