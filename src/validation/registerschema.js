import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .required('Email address is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  admin: yup
    .string()
    .oneOf(['0', '1'], 'Please select your role.')
})