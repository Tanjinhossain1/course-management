import { Col, Row } from 'antd'
import React from 'react'
import FormInput from '../Forms/FormInput'
import FormSelectField from '../Forms/FormSelectField'
import { bloodGroupOptions } from '@/constants/global'
import FormDatePicker from '../Forms/DatePicker'

export default function StudentBasicInfo() {
  return (
    <div style={{
      border: "1px solid #d9d9d9",
      borderRadius: "5px",
      padding: "15px",
      margin: "10px"
  }}>
      <p style={{fontSize: "20px",marginBottom: "10px"}}>Basic Details</p>
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

<Col style={{marginBottom: "10px"}} className="gutter-row" span={8}>
<FormInput type='email' name='student.email' size='large' label='Email' />
</Col>


<Col style={{marginBottom: "10px"}} className="gutter-row" span={8}>
<FormInput type='number' name='student.contactNo' size='large' label='Content No' />
</Col>

<Col   className="gutter-row" span={8}>
<FormInput type='number' name='student.emergencyContactNo' size='large' label='Emergency Contact No' />
</Col>

<Col className="gutter-row" span={8} >
<FormDatePicker name='student.dateOfBirth' label='Birth Date' size='large'  />
</Col> 


<Col   className="gutter-row" span={8} >
<FormSelectField placeholder='Select Blood Group' name='student.bloodGroup'
options={bloodGroupOptions} label='Blood Group' size='large'  />
</Col> 

<Col className="gutter-row" span={8}>
<FormInput type='text' name='student.presentAddress' size='large' label='Address' />
</Col>


<Col style={{marginTop: "10px"}}  className="gutter-row" span={8}>
<FormInput type='text' name='student.permanentAddress' size='large' label='Permanent Address' />
</Col>



</Row>
</div>
  )
}
