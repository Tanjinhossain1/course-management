import React, { useState,useEffect } from 'react';
import { Button, message, Steps } from 'antd';
import { FormProvider, useForm } from 'react-hook-form';
import { getTOLocalStorage, setTOLocalStorage } from '@/utils/local-storage';
import { useRouter } from 'next/navigation';
import Form, { FormConfig } from '../Form';
import { yupResolver } from '@hookform/resolvers/yup'
import studentSchema from '@/schemas/student';

interface StepsType {
    title: string,
    content?: React.ReactElement | React.ReactNode
}
interface StepFormPropsTyps {
  steps: StepsType[];
  submitHandler: (data: any) => void;
  redirectUrl?: string; 
}
  
const StepsForm= ({steps, submitHandler,redirectUrl}:StepFormPropsTyps) => {
  const router= useRouter()
  const [current, setCurrent] = useState<number>(
    !!getTOLocalStorage("step") ? Number(JSON.parse(getTOLocalStorage("step") as string).step) : 0 
  );


  useEffect(() => {
    setTOLocalStorage('step',JSON.stringify({step: current}))
  }, [current])
  


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title })); 

  const handleFinalSubmit = (data: any) =>{
    submitHandler(data); 
    setCurrent(0);
    if(redirectUrl){
      router.push(redirectUrl)
    }
  }

  return (
    <>
      <Steps current={current} items={items} /> 
        <Form submitHandler={handleFinalSubmit} resolver={yupResolver(studentSchema)} >
      <div >{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button htmlType='submit' type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
      </Form> 
    </>
  );
};

export default StepsForm;