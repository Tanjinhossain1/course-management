import * as yup from 'yup';

// Define a Yup schema for the user data
const adminYupSchema = yup.object().shape({
  role: yup.string().oneOf(['super_admin', 'admin'], 'Invalid role').required('Role is required'),
  password: yup.string().min(6).max(32).required('Password is required'),
    admin: yup.object().shape({
        name: yup.object().shape({
            firstName: yup.string().required("First name is required"),
            middleName: yup.string().required("Middle name is required"),
            lastName: yup.string().required("Last name is required"),
        }),
        email: yup.string().email().required("Email is required"),
        designation: yup.string().required("Designation is required"),
        dateOfBirth: yup.string().required("Date of Birth is required")
    })
});

export default adminYupSchema;
