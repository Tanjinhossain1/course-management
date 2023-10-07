"use client";
import FormDatePicker from "@/components/Forms/DatePicker";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImageField from "@/components/ui/UploadImage";
import { waitingMessageTimer } from "@/constants/commonTimers";
import {
  adminRoleOptions,
  bloodGroupOptions,
  departmentOptions,
  genderOptions,
} from "@/constants/global";
import { useCreateAdminMutation } from "@/redux/api/admin";
import { useGetAllDepartmentQuery } from "@/redux/api/departmentApi";
import adminYupSchema from "@/schemas/admin";
import { getUserInfo } from "@/services/auth.service";
import { IDepartment } from "@/types";
import { TrimToUpperCase } from "@/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import React from "react";

export default function CreateAdminPage() {
  const { role } = getUserInfo() as any;

  const { data, isLoading } = useGetAllDepartmentQuery({ limit: 100, page: 1 });
  const [createAdmin] = useCreateAdminMutation(); 
  //@ts-ignore
  const departments: IDepartment[] = data?.departments;

  const departmentOptions = departments?.map((department) => {
    return {
      label: department?.title,
      value: department?.id,
    };
  });

  const onSubmit = async (values: any) => {
    console.log("data", values)
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    // const data = JSON.stringify(obj);
    // const formData = new FormData();
    // formData.append("file", file as Blob);
    // formData.append("data", data);
    message.loading("Waiting...", waitingMessageTimer);
    try {
      console.log('formData', values)
      await createAdmin(values);
      message.success("Admin created successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
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
            label: `${TrimToUpperCase("admin")}`,
            link: `/${role}/admin`,
          },
        ]}
      />
      <h1>Create Admin</h1>

      <div>
        <Form submitHandler={onSubmit} >
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <p style={{ fontSize: "20px", marginBottom: "10px" }}>
              Admin Details
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="admin.gender"
                  options={genderOptions}
                  label="Gender"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="admin.managementDepartment"
                  options={departmentOptions}
                  label="Department"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="role"
                  options={adminRoleOptions}
                  label="Department"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              > 
                <UploadImageField name="file" />
              </Col>
            </Row>
              
          </div>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <p style={{ fontSize: "20px", marginBottom: "10px" }}>
              Basic Details
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="email"
                  name="admin.email"
                  size="large"
                  label="Email address"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact No."
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact No."
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date of birth"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="admin.bloodGroup"
                  options={bloodGroupOptions}
                  label="Blood group"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                type="text"
                  name="admin.presentAddress"
                  size="large"
                  label="Present address" 
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="admin.permanentAddress"
                  size="large"
                  label="Permanent address"
                  type="text"
                />
              </Col>
            </Row>
          </div>
          <Button
            style={{ marginLeft: "10px" }}
            htmlType="submit"
            type="primary"
          >
            SUBMIT
          </Button>
        </Form>
      </div>
    </div>
  );
}
