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
                    <Form
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            // backgroundColor: 'yellow',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '20px',
                            height: '100%',
                        }}
                    >
                        <div
                            style={{
                                border: '2px solid gray',
                                padding: '8px',
                                borderRadius: '5px',
                                width: '100%',
                            }}
                        >
                            <Field
                                style={{
                                    outline: 'none',
                                    color: 'gray',
                                    width: '100%',
                                    border: 'none',
                                    // padding: '8px'
                                }}
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div
                            style={{
                                height: '30px',
                                width: '100%',
                                // backgroundColor: 'purple'
                            }}
                        >
                            <ErrorMessage
                                style={{
                                    color: 'red',
                                    fontSize: '14px',
                                }}
                                name="email"
                                component="div"
                            />
                        </div>
                        <div
                            style={{
                                border: '2px solid gray',
                                padding: '8px',
                                borderRadius: '5px',
                                width: '100%',
                            }}
                        >
                            <Field
                                style={{
                                    outline: 'none',
                                    color: 'gray',
                                    border: 'none',
                                    width: '100%',
                                    // padding: '8px'
                                }}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div
                            style={{
                                height: '30px',
                                width: '100%',
                                // backgroundColor: 'purple'
                            }}
                        >
                            <ErrorMessage
                                style={{
                                    color: 'red',
                                    fontSize: '14px',
                                    // backgroundColor: 'blue'
                                }}
                                name="password"
                                component="div"
                            />
                        </div>
                        <div
                            style={{
                                height: '30px',
                                width: '100%',
                                color: 'red',
                                fontSize: '12px',
                                // backgroundColor: 'purple'
                            }}
                        >
                            {error.status && <span>{error.msg}</span>}
                        </div>
                        <button
                            style={{
                                color: 'white',
                                backgroundColor: 'gray', //hover black y lightgray disabled
                                border: 'none',
                                width: '100px',
                                padding: '8px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                            }}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                        <span
                            style={{
                                marginTop: '10px',
                                width: '100%',
                                textAlign: 'end',
                                // backgroundColor: 'red'
                            }}
                        >
                            <a href="/auth/register">Register</a>
                        </span>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default SignInForm;
