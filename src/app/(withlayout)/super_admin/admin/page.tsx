"use client"
import { ActionBar } from '@/components/ui/ActionBar'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import { getUserInfo } from '@/services/auth.service'
import { TrimToUpperCase } from '@/utils/utils'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function AdminInSuper() {
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
  <ActionBar title='Admin List'>
  <Link href={"/super_admin/admin/create"}>
  <Button>
      Create  admin
  </Button>
  </Link>
  </ActionBar>
  </div>
  )
}
