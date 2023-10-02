import * as yup from 'yup'; 

const studentSchema = yup.object().shape({
  student: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("Field Is Required"),
      lastName: yup.string().required("Field Is Required"),
      middleName: yup.string(),
    }),
    gender: yup.string().oneOf(['male', 'female', 'other']).required("Field Is Required"),
    dateOfBirth: yup.string().matches(/^\d{2}-\d{2}-\d{4}$/).required("Field Is Required"),
    email: yup.string().email().required("Field Is Required"),
    contactNo: yup.string().required("Field Is Required"),
    emergencyContactNo: yup.string().required("Field Is Required"),
    bloodGroup: yup.string().required("Field Is Required"),
    presentAddress: yup.string().required("Field Is Required"),
    permanentAddress: yup.string().required("Field Is Required"),
    guardian: yup.object().shape({
      fatherName: yup.string().required("Field Is Required"),
      fatherOccupation: yup.string().required("Field Is Required"),
      fatherContactNo: yup.string().required("Field Is Required"),
      motherName: yup.string().required("Field Is Required"),
      motherOccupation: yup.string().required("Field Is Required"),
      motherContactNo: yup.string().required("Field Is Required"),
      address: yup.string().required("Field Is Required"),
    }),
    localGuardian: yup.object().shape({
      name: yup.string().required("Field Is Required"),
      occupation: yup.string().required("Field Is Required"),
      contactNo: yup.string().required("Field Is Required"),
      address: yup.string().required("Field Is Required"),
    }),
  }),
  password: yup.string().required("Field Is Required"),
});
 
export default studentSchema;
