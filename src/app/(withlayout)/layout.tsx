'use client'
import React, { useEffect, useState } from 'react';

import { Layout } from 'antd';  
import Contents from '@/components/ui/Contents';
import SideBar from '@/components/ui/SideBar';
import { isLoggedIn } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Loader/InitialLoading/Spiner';

const DashboardLayout = ({
    children
}:{children: React.ReactNode}) => {
  const router = useRouter()
  const isUserLoggedIn = isLoggedIn();
  const [isLoading,setIsLoading] = useState<boolean>(false)
  useEffect(()=>{
    if(!isUserLoggedIn){
      router.push('/login')
    }
    setIsLoading(true)
  },[isUserLoggedIn,router])

  if(!isLoading){
    return <Spinner />
  }
  return ( 
          <Layout hasSider>
            <SideBar />
            <Contents>
          {children}
            </Contents>
              
          </Layout> 
  );
};

export default DashboardLayout;