'use client' 
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { waitingMessageTimer } from '@/constants/commonTimers';
import { useCreateDepartmentMutation } from '@/redux/api/departmentApi';
import { getUserInfo } from '@/services/auth.service' 
import { Button, Col, Row, message } from 'antd';
import React from 'react'

export default function CreateDepartmentPage() { 
  const [createDepartment] = useCreateDepartmentMutation()
  const onSubmit = async (data: any) => {
    message.loading("Waiting...",waitingMessageTimer)
    try { 
      console.log('data',data);
     await createDepartment(data)
     message.success("Department Create Successfully")
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message)
    }
  };
  const base = "super_admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>Create Department</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
}
