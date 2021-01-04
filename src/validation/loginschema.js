import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .required('Email address is required'),
  password: yup
    .string()
    .required('Password is required'),
})