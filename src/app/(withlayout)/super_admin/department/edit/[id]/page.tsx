"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
    useDeleteDepartmentMutation,
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

interface DPPropsType {
  params: any;
}
export default function DepartmentEditPage({ params }: DPPropsType) {
  const { id } = params;
  const history = useRouter()
  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();
  const [deleteDepartment] = useDeleteDepartmentMutation();
  const onSubmit = async (value: { title: string }) => {
    message.loading("Waiting...");
    try {
      await updateDepartment({ id, body: value });
      message.success("Department Update Successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title,
  };
  const DeleteDepartment = async () =>{
    message.loading("Waiting...");
    try {
      await deleteDepartment(id);
      message.success("Department Delete Successfully");
      history.back()
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  }
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `Super Admin`,
            link: `/super_admin`,
          },
          {
            label: `Department`,
            link: `/super_admin/department`,
          },
        ]}
      />
      <h1>Update Department</h1>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={10} style={{ margin: "10px 0" }}>
            <div style={{ display: "flex" }}>
          <FormInput  name="title" label="Title" />
              <Button onClick={DeleteDepartment} style={{marginLeft: "10px"}} danger type="primary">
                DELETE
              </Button>
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          UPdate
        </Button>
      </Form>
    </div>
  );
}
