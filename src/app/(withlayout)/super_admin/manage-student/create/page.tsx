'use client'
import StepsForm from '@/components/Forms/StepsForm/StepsForm'
import StudentBasicInfo from '@/components/StudentForms/StudentBasicInfo';
import StudentGuardianInfo from '@/components/StudentForms/StudentGuardianInfo';
import StudentInfo from '@/components/StudentForms/StudentInfo';
import StudentLocalGuardianInfo from '@/components/StudentForms/StudentLocalGuardianInfo';
import React from 'react'

const steps = [
    {
      title: 'Student Information',
      content: <StudentInfo />,
    },
    {
      title: 'Basic Information',
      content: <StudentBasicInfo />,
    },
    {
      title: 'Guardian Information',
      content: <StudentGuardianInfo />,
    },
    {
      title: 'Local Guardian Information',
      content: <StudentLocalGuardianInfo />,
    },
  ];
export default function StudentCreatePage() {
  const handleStudentSubmit = async (data: any) => {
      try {
          console.log('student ', data);
      } catch (error) {
        console.error(error)
      }
  }
  return (
    <div>
    <h1>Student Create</h1>

    <StepsForm submitHandler={handleStudentSubmit} steps={steps} />

    </div>
  )
}
