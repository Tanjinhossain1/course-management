"use client";
import TableActionRoundButtons from "@/components/AllCommonButtons/TableActionRoundButtons";
import TableListViewer from "@/components/ui/TableListViewer";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useGetAllDepartmentQuery } from "@/redux/api/departmentApi";
import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import { PaginatedTypes } from "@/types";
import { TrimToUpperCase, fullDateFormat } from "@/utils/utils";
import {
  DeleteOutlined,
  EditOutlined,
  EyeFilled,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import dayjs from "dayjs";

export default function DepartmentPage() {
  const { role } = getUserInfo() as any;
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  })

  if(!!debouncedTerm){
    query["searchTerm"] = debouncedTerm;
  }

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
        return createdAt && dayjs(createdAt).format("MMM D, YYYY hh:mm A")
      },
    },
    {
      title: "Action",
      render: (data: any) => {
        return (
          <Fragment>
            <Link href={`/super_admin/department/edit/${data?.id}`}>
            <TableActionRoundButtons
              styles={{ margin: "0px 8px" }}
              icon={<EditOutlined />}
              backgroundColor="#52c41a"
            />
              </Link>
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

  const resetFilters = () =>{
    setSortBy("")
    setSortOrder("")
    setSearchTerm("")
  }
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
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        margin: '5px'
      }}>
      <Input 
      type="text"
      size="large"
      placeholder="Search"
      style={{
        width: "25%"
      }}
      onChange={(e)=>{
        console.log('first  ', e.target.value)
        setSearchTerm(e.target.value)
      }}
      />
      <div> 
      <Link href={"/super_admin/department/create"}>
        <Button style={{textAlign: "end"}} type="primary">Create Department</Button>
      </Link> 
      {
        !!sortBy || !!sortOrder || !!searchTerm && <Button onClick={resetFilters} style={{marginLeft: "5px"}} type="primary">
          <ReloadOutlined />
        </Button>
      }
      </div>
      </div>
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
