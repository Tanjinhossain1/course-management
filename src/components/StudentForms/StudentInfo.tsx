'use client'
import { Col, Row } from 'antd'
import React from 'react'
import FormInput from '../Forms/FormInput'
import UploadImageField from '../ui/UploadImage'
import FormSelectField from '../Forms/FormSelectField'
import { acDepartmentOptions, acSemesterOptions, adminRoleOptions, departmentOptions, facultyOptions, genderOptions } from '@/constants/global'

export default function StudentInfo() {
  return (
    <div>
        <div style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
           margin: "10px"
        }}>
            <p style={{fontSize: "20px",marginBottom: "10px"}}>student Details</p>

<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

<Col xl={6} className="gutter-row" span={8} lg={6}>
  <FormInput type='text' name='student.name.firstName' size='large' label='First Name' />
</Col>

<Col className="gutter-row" span={8} lg={6}>
<FormInput type='text' name='student.name.middleName' size='large' label='Middle Name' />
</Col>

<Col className="gutter-row" span={8} lg={6}>
<FormInput type='text' name='student.name.lastName' size='large' label='Last Name' />
</Col>

<Col   className="gutter-row" span={8} lg={6}>
<FormInput type='text' name='password' size='large' label='Password' />
</Col> 

<Col style={{marginTop: "10px"}} className="gutter-row" span={8} lg={6}>
<FormSelectField placeholder='Select Department' name='student.academicDepartment'
 options={acDepartmentOptions} label='Academic Department' size='large'  />
</Col> 

<Col style={{marginTop: "10px"}} className="gutter-row" span={8} lg={6}>
<FormSelectField placeholder='Select Faculty' name='student.academicFaculty'
 options={facultyOptions} label='Academic Faculty' size='large'  />
</Col> 

<Col style={{marginTop: "10px"}} className="gutter-row" span={8} lg={6}>
<FormSelectField placeholder='Select Semester' name='student.academicSemester'
 options={acSemesterOptions} label='Academic Semester' size='large'  />
</Col> 


<Col style={{marginTop: "10px"}} className="gutter-row" span={8} lg={6}>
<FormSelectField placeholder='Select Gender' name='student.gender' options={genderOptions} label='Gender' size='large'  />
</Col>

<Col style={{marginTop: "10px"}} className="gutter-row" span={8} lg={6}>
<UploadImageField />
</Col>
</Row> 


  </div>
    </div>
  )
}
