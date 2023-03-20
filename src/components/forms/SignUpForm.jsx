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
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm password"
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
                                name="confirmPassword"
                                component="div"
                            />
                        </div>
                        <div
                            style={{
                                height: '30px',
                                width: '100%',
                                color: 'red',
                                fontSize: '14px',
                                // backgroundColor: 'purple'
                            }}
                        >
                            {error && <span>Passwords must match</span>}
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
                            <a href="/auth/login">Login</a>
                        </span>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default SignUpForm;
