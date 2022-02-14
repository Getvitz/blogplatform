import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import Cookies from 'js-cookie';
import { signInUser } from '../../../apiClient';
import styles from './signin.module.scss';
import { setUserData, setSignedIn, dataLoading } from '../../../store/actions';

export default function SignInForm() {

  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

    const onFinish = values => {
      dispatch(dataLoading)
      const formData = {
          "email": values.email,
          "password": values.password
      }
      signInUser(formData)
      .then((body) => {
        if (body.errors) {
          form.setFields([
          {
            name: 'email',
            errors: ['Sorry, email or password is invalid!'],
          },
       ])
    }
    else {
        form.resetFields();
        dispatch(setUserData(body.user));
        dispatch(setSignedIn(true));
        Cookies.set('token', body.user.token)
        Cookies.set('user', JSON.stringify(body.user))
        navigate('/')
  }});  
    console.log('Received values of form: ', formData);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout='vertical'
      name="normal_login"
      size="large"
      className={styles.loginform}
    >
      <div className={styles.title}>
        <span>Sign In</span>
      </div>

      <Form.Item
        className={styles.input}
        label="Email address"
        name="email"
        type="email"
        hasFeedback
        rules={[
          {
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please provide correct email"
          },
        ]}
      >
      <Input placeholder="Email address" />
      </Form.Item>


      <Form.Item
      className={styles.input}
        label="Password"
        name="password"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your Password',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate className={styles.submit}>
        { () => (<Button 
          type="primary" 
          htmlType="submit" 
          className={styles.loginbtn} 
          disabled={
            !form.isFieldsTouched(true) ||
            form.getFieldsError().filter(({ errors }) => errors.length).length
          }>
          Log in
        </Button>)}
      </Form.Item>
      <span className={styles.reminder}>Don’t have an account? <Link to="/sign-up">Sign Up.</Link></span>
    </Form>
  );
};
