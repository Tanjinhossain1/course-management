'use client'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import { getUserInfo } from '@/services/auth.service'
import { TrimToUpperCase } from '@/utils/utils'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function DepartmentPage() {
    const {role} = getUserInfo() as any
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
  <Button>
      Create  Department
  </Button>
  </Link>
  </div>
  )
}
