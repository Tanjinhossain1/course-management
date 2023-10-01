'use client'
import FormDatePicker from '@/components/Forms/DatePicker'
import Form from '@/components/Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import FormSelectField from '@/components/Forms/FormSelectField'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import UploadImageField from '@/components/ui/UploadImage'
import { adminRoleOptions, bloodGroupOptions, departmentOptions, genderOptions } from '@/constants/global'
import adminYupSchema from '@/schemas/admin'
import { getUserInfo } from '@/services/auth.service'
import { TrimToUpperCase } from '@/utils/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Col, Row } from 'antd'
import React from 'react'

export default function CreateAdminPage() {
    const {role} = getUserInfo() as any;

    const onSubmit = async (data: any) => {
        try {
          console.log('submit',data)
        } catch (err) {console.error(err)}
      };
    return (
      <div>
      <UMBreadCrumb
      items={[
        {
          label: `${TrimToUpperCase(role)}`,
          link: `/${role}`,
        },
        {
          label: `${TrimToUpperCase('admin')}`,
          link: `/${role}/admin`,
        },
      ]}
    />
    <h1>Create Admin</h1>
    

    <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(adminYupSchema)} >
        
        <div style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
            marginLeft: "10px",
            marginRight: "10px"
        }}>
            <p style={{fontSize: "20px",marginBottom: "10px"}}>Admin Details</p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

<Col xl={6} className="gutter-row" span={8} lg={6}>
  <FormInput type='text' name='admin.name.firstName' size='large' label='First Name' />
</Col>

<Col className="gutter-row" span={8} lg={6}>
<FormInput type='text' name='admin.name.middleName' size='large' label='Middle Name' />
</Col>

<Col className="gutter-row" span={8} lg={6}>
<FormInput type='text' name='admin.name.lastName' size='large' label='Last Name' />
</Col>

<Col   className="gutter-row" span={8} lg={6}>
<FormInput type='password' name='password' size='large' label='Password' />
</Col>

<Col style={{marginTop: "10px"}} className="gutter-row" span={8} lg={6}>
<FormSelectField placeholder='Select Gender' name='admin.gender' options={genderOptions} label='Gender' size='large'  />
</Col>

<Col style={{marginTop: "10px"}} className="gutter-row" span={8} lg={6}>
<FormSelectField placeholder='Select Department' name='admin.managementDepartment'
 options={departmentOptions} label='Department' size='large'  />
</Col> 

<Col style={{marginTop: "10px"}} className="gutter-row" span={8} lg={6}>
<FormSelectField placeholder='Select Admin Role' name='role'
 options={adminRoleOptions} label='Role' size='large'  />
</Col> 


<Col style={{marginTop: "10px"}} className="gutter-row" span={8} lg={6}>
<UploadImageField />
</Col>
</Row> 


  </div>
        <div style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
            marginLeft: "10px",
            marginRight: "10px"
        }}>
            <p style={{fontSize: "20px",marginBottom: "10px"}}>Basic Details</p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

<Col style={{marginBottom: "10px"}} className="gutter-row" span={8}>
  <FormInput type='email' name='admin.email' size='large' label='Email' />
</Col>


<Col style={{marginBottom: "10px"}} className="gutter-row" span={8}>
<FormInput type='number' name='admin.contactNo' size='large' label='Content No' />
</Col>

<Col   className="gutter-row" span={8}>
<FormInput type='number' name='admin.emergencyContactNo' size='large' label='Emergency Contact No' />
</Col>

<Col className="gutter-row" span={8}>
<FormInput type='text' name='admin.presentAddress' size='large' label='Address' />
</Col>
 

<Col className="gutter-row" span={8}>
<FormInput type='text' name='admin.permanentAddress' size='large' label='Permanent Address' />
</Col>
 

<Col   className="gutter-row" span={8} >
<FormSelectField placeholder='Select Blood Group' name='admin.bloodGroup'
 options={bloodGroupOptions} label='Blood Group' size='large'  />
</Col> 

<Col style={{marginTop: "10px"}} className="gutter-row" span={8} >
<FormDatePicker name='admin.dateOfBirth' label='Birth Date' size='large'  />
</Col> 

</Row>
  </div>
        <Button style={{marginLeft: "10px"}} htmlType='submit' type='primary'>SUBMIT</Button>
        </Form>
    </div>

    </div>
  )
}
