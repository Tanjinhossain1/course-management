'use client'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import { getUserInfo } from '@/services/auth.service'
import { TrimToUpperCase } from '@/utils/utils'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function ManageFacultyPage() {
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
<h1>Manage Faculty</h1>
<Link href={"/super_admin/manage-faculty/create"}>
<Button>
    Create  Faculty
</Button>
</Link>
</div>
  )
}
