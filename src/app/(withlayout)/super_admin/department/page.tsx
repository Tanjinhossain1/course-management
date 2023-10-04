"use client";
import TableActionRoundButtons from "@/components/AllCommonButtons/TableActionRoundButtons";
import TableListViewer from "@/components/ui/TableListViewer";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useGetAllDepartmentQuery } from "@/redux/api/departmentApi";
import { getUserInfo } from "@/services/auth.service";
import { PaginatedTypes } from "@/types";
import { TrimToUpperCase, fullDateFormat } from "@/utils/utils";
import {
  DeleteOutlined,
  EditOutlined,
  EyeFilled,
  EyeOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import React, { Fragment, useState } from "react";

export default function DepartmentPage() {
  const { role } = getUserInfo() as any;
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useGetAllDepartmentQuery(query);

  const departments = data?.departments;
  const meta: PaginatedTypes = data?.meta as PaginatedTypes;

  console.log("first", data);

  const tableColumn = [
    {
      title: "Title",
      dataIndex: "title",
      render: (title: string) => {
        return TrimToUpperCase(title);
      },
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      sorter: true,
      render: (createdAt: string) => {
        return fullDateFormat(createdAt);
      },
    },
    {
      title: "Action",
      render: (data: any) => {
        return (
          <Fragment>  
            <TableActionRoundButtons
              icon={<EyeFilled />}
              styles={{
                border: "1px solid #d9d9d9",
                color: "#333",
                transition: "background-color 0.3s",
              }}
              backgroundColor="#fff"
            />
            <TableActionRoundButtons
              styles={{ margin: "0px 8px" }}
              icon={<EditOutlined />}
              backgroundColor="#52c41a"
            />
            <TableActionRoundButtons
              icon={<DeleteOutlined />}
              backgroundColor="#ff4d4f"
            />
          </Fragment>
        );
      },
    },
  ];
  const onChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
    console.log("onchange table");
  };
  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
    console.log("onchange paginated");
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${TrimToUpperCase(role)}`,
            link: `/${role}`,
          },
        ]}
      />
      <h1>Manage Department</h1>
      <Link href={"/super_admin/department/create"}>
        <Button>Create Department</Button>
      </Link>
      <TableListViewer
        loading={isLoading}
        columns={tableColumn}
        tableRow={departments}
        onChange={onChange}
        paginationConfig={{
          onChange: onPaginationChange,
          pageSize: size,
          total: meta?.total,
          showSizeChanger: true,
          pageSizeOptions: [15, 25, 35, 50],
        }}
      />
    </div>
  );
}
