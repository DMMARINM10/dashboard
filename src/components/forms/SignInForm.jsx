import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignInSchema } from '../../helpers/validations';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/slices/auth';
import { useDispatch } from 'react-redux';

const SignInForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState({
        status: false,
        msg: null,
    });
    return (
        <>
            <h1>Sign In</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SignInSchema}
                onSubmit={async (values, actions) => {
                    const { email, password } = values;
                    await signInWithEmailAndPassword(auth, email, password)
                        .then(() => {
                            dispatch(loginUser(email));
                            localStorage.setItem('user', email);
                            navigate('/posts?page=1');
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            setError({
                                status: true,
                                msg: errorMessage,
                            });
                            actions.setSubmitting(false);
                        });
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
                        <div className="sign_extra-error">
                            {error.status && <span>{error.msg}</span>}
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        <a href="/auth/register">Register</a>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default SignInForm;
