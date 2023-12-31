"use client";
import { Button, Col, Input, Row, message } from "antd";
import loginImage from "../../assets/login-image.png";
import Image from "next/image";

import { SubmitHandler } from "react-hook-form";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
    id: string;
    password: string;
  };
  
export default function LoginForm() {
    const [userLogin] = useUserLoginMutation();
    const router = useRouter()
  
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
      try {
        const res = await userLogin({...data}).unwrap();
        if(res?.accessToken){
          router.push('/profile')
          message.success("User Login Success")
        }
  
        storeUserInfo({accessToken: res?.accessToken })
      } catch (err) {console.error(err)}
    };
    console.log('first    vf', isLoggedIn())
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
        }}
      >
        <Col sm={12} md={16} lg={10}>
          <Image src={loginImage} width={500} alt="login image" />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1
            style={{
              margin: "15px 0px",
            }}
          >
            First login your account
          </h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <FormInput name="id" type="text" size="large" label="User Id" />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    );
}
