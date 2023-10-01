'use client'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import { getUserInfo } from '@/services/auth.service'
import { TrimToUpperCase } from '@/utils/utils'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function ManageStudent() {
    const {role} = getUserInfo() as any
  return (
    <div>
        <UMBreadCrumb
        items={[
          {
            label: `${TrimToUpperCase(role)}`,
            link: `/${role}`,
          },
          {
            label: `${TrimToUpperCase('student')}`,
            link: `/${role}/student`,
          },
        ]}
      />
    <h1>ManageStudent</h1>
    <Link href={"/super_admin/manage-student/create"}>
    <Button>
        Create Student
    </Button>
    </Link>
    </div>
  )
}
