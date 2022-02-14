import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import Cookies from 'js-cookie';
import styles from './signup.module.scss'
import { registerUser } from '../../../apiClient';
import { setUserData, setSignedIn, dataLoading } from '../../../store/actions';


export default function SignUpForm() {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = (data) => {
    dispatch(dataLoading)
    registerUser(data)
    .then((body) => {
      if (body.errors) {
          if('email' in body.errors) {
            form.setFields([
            {
              name: 'email',
              errors: ['Sorry, this email is already taken'],
            },
         ])
        }
          if('username' in body.errors){
            form.setFields([
              {
                name: 'username',
                errors: ['Sorry, this username is already taken'],
              },
           ])
          }
      }
      else {
      form.resetFields()
      dispatch(setUserData(body.user));
      dispatch(setSignedIn(true));
      console.log(body.user.token)
      Cookies.set('token', body.user.token);
      navigate('/')
      }
  })
  }

    const onFinish = values => {
      const formData = {
          "username": values.username,
          "email": values.email,
          "password": values.password
      }
      register(formData)
    console.log('Received values of form: ', formData);
  };

  return (
    <Form
      form={form}
      layout='vertical'
      name="normal_login"
      size="large"
      initialValues={{
        agreement: true,
      }}
      className={styles.loginform}
      onFinish={onFinish}
    >
      <div className={styles.title}>
        <span>Create new account</span>
      </div>
      <Form.Item
        className={styles.input}
        label="Username"
        name="username"
        validateTrigger='onBlur'
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
          {
            min: 3, 
            max: 20,
            message: 'Username must be from 3 to 20 characters.'
          }
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>
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
          {
            min: 6, 
            max: 40,
            message: 'Password must be from 6 to 40 characters.'
          }
        ]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
      className={styles.input}
        label="Repeat Password"
        name="confirm"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please repeat your Password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match!'));
            },
          }),

        ]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Divider className={styles.divider} />
      <Form.Item
        className={styles.checkbox}
        name="agreement"
        valuePropName="checked"
        rules={[
          {
              required: true,
              validator: async (_, checked) => {
                  if (!checked) {
                      return Promise.reject(
                          new Error("You must accept agreement to continue"),
                      );
                  }
              },
          },
      
      ]}
  
      >
        <Checkbox>I agree to the processing of my personal information</Checkbox>
      </Form.Item>
      <Form.Item shouldUpdate className={styles.submit}>
        { () => (<Button 
          type="primary" 
          htmlType="submit" 
          className={styles.createbtn} 
          disabled={
            !form.isFieldsTouched(['username', 'email', 'password', 'confirm'], true) ||
            form.getFieldsError().filter(({ errors }) => errors.length).length
          }>
          Create
        </Button>)}
      </Form.Item>
      <span className={styles.reminder}>Already have an account? <Link to="/sign-in">Sign In.</Link></span>
    </Form>
  );
};
