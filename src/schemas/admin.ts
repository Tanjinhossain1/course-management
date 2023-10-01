import * as yup from 'yup';

// Define a Yup schema for the user data
const adminYupSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
  role: yup.string().oneOf(['super_admin', 'admin'], 'Invalid role').required('Role is required'),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required('First name is required'),
      lastName: yup.string().required('Last name is required'),
      middleName: yup.string(),
    }),
    dateOfBirth: yup.date().required('Date of birth is required'),
    gender: yup.string().oneOf(['male', 'female', 'other'], 'Invalid gender').required('Gender is required'),
    bloodGroup: yup.string().required('Blood group is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    contactNo: yup.string().required('Contact number is required'),
    emergencyContactNo: yup.string().required('Emergency contact number is required'),
    presentAddress: yup.string().required('Present address is required'),
    permanentAddress: yup.string().required('Permanent address is required'),
    managementDepartment: yup.string().required('Management department is required'),
    designation: yup.string().required('Designation is required'),
    profileImage: yup.string().url('Invalid URL').required('Profile image URL is required'),
  }),
});

export default adminYupSchema;
