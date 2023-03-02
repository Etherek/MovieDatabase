import { useState } from 'react';
import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  return (
    <div
      style={{
        width: '60%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '20px',
        color:'aqua'
      }}
    >
      <h1>Login</h1>
      <div
        style={{
          width: '80%',
          height: '50px',
          border: '1px solid black',
          borderRadius: '10px',
          margin: '20px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
       <Input
      placeholder="Enter your login"
      prefix={<UserOutlined className="site-form-item-icon" />}
 
    />
      </div>
      <h1>Hasło</h1>
      <div
        style={{
          width: '80%',
          height: '50px',
          border: '1px solid black',
          borderRadius: '10px',
          margin: '20px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
                <Input.Password
        placeholder="input password"
        iconRender={(visible:boolean) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
      </div>
    </div>
  );
}

export default LoginForm;