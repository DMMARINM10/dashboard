import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Min 8 characters').required('Required'),
});

export const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Min 8 characters').required('Required'),
    confirmPassword: Yup.string()
        .min(8, 'Min 8 characters')
        .required('Required'),
});
