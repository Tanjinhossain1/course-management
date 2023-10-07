"use client"
import { ActionBar } from '@/components/ui/ActionBar'
import TableListViewer from '@/components/ui/TableListViewer'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import { useDebounced } from '@/redux/hooks'
import { getUserInfo } from '@/services/auth.service'
import { IAdmin, IDepartment, IMeta } from '@/types'
import { TrimToUpperCase } from '@/utils/utils'
import { DeleteOutlined, EditOutlined, EyeOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import dayjs from 'dayjs'
import { useAdminsQuery } from '@/redux/api/admin'

export default function AdminInSuper() {
    const {role} = getUserInfo() as any;
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
  
    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;
  
    const debouncedSearchTerm = useDebounced({
      searchQuery: searchTerm,
      delay: 600,
    });
  
    if (!!debouncedSearchTerm) {
      query["searchTerm"] = debouncedSearchTerm;
    }
    const { data, isLoading } = useAdminsQuery({ ...query });
    //@ts-ignore
    const admins: IAdmin = data?.admins;
    const meta: IMeta | undefined = data?.meta;
  
    const columns = [
      {
        title: "Id",
        dataIndex: "id",
        sorter: true,
      },
      {
        title: "Name",
        dataIndex: "name",
        render: function (data: Record<string, string>) {
          const fullName = `${data?.firstName} ${data?.middleName} ${data?.lastName}`;
          return <>{fullName}</>;
        },
      },
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "Department",
        dataIndex: "managementDepartment",
        render: function (data: IDepartment) {
          return <>{data?.title}</>;
        },
      },
      {
        title: "Designation",
        dataIndex: "designation",
      },
      {
        title: "Created at",
        dataIndex: "createdAt",
        render: function (data: any) {
          return data && dayjs(data).format("MMM D, YYYY hh:mm A");
        },
        sorter: true,
      },
      {
        title: "Contact no.",
        dataIndex: "contactNo",
      },
      {
        title: "Action",
        dataIndex: "id",
        render: function (data: any) {
          return (
            <>
              <Link href={`/super_admin/admin/details/${data.id}`}>
                <Button onClick={() => console.log(data)} type="primary">
                  <EyeOutlined />
                </Button>
              </Link>
              <Link href={`/super_admin/admin/edit/${data.id}`}>
                <Button
                  style={{
                    margin: "0px 5px",
                  }}
                  onClick={() => console.log(data)}
                  type="primary"
                >
                  <EditOutlined />
                </Button>
              </Link>
              <Button onClick={() => console.log(data)} type="primary" danger>
                <DeleteOutlined />
              </Button>
            </>
          );
        },
      },
    ];
    const onPaginationChange = (page: number, pageSize: number) => {
      console.log("Page:", page, "PageSize:", pageSize);
      setPage(page);
      setSize(pageSize);
    };
    const onTableChange = (pagination: any, filter: any, sorter: any) => {
      const { order, field } = sorter;
      // console.log(order, field);
      setSortBy(field as string);
      setSortOrder(order === "ascend" ? "asc" : "desc");
    };
  
    const resetFilters = () => {
      setSortBy("");
      setSortOrder("");
      setSearchTerm("");
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
  <ActionBar title='Admin List'>
  <Link href={"/super_admin/admin/create"}>
  <Button>
      Create  admin
  </Button>
  </Link>
  </ActionBar>
  <ActionBar title="Admin List">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        <div>
          <Link href="/super_admin/admin/create">
            <Button type="primary">Create Admin</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <TableListViewer
        loading={isLoading}
        columns={columns}
        tableRow={admins}
        paginationConfig={{
          onChange: onPaginationChange,
          pageSize: size,
          total: meta?.total,
          showSizeChanger: true,
          pageSizeOptions: [15, 25, 35, 50],
        }} 
        onChange={onTableChange} 
      />
  </div>
  )
}
