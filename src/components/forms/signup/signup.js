import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import styles from './signup.module.scss'


export default function SignUpForm() {
  const [form] = Form.useForm();

    const onFinish = values => {
      form.resetFields();
      const formData = {
        "user": {
          "username": values.username,
          "email": values.email,
          "password": values.password
        }
      }
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
            !form.isFieldsTouched(true) ||
            form.getFieldsError().filter(({ errors }) => errors.length).length
          }>
          Create
        </Button>)}
      </Form.Item>
      <span className={styles.reminder}>Already have an account? <Link to="/sign-up">Sign In.</Link></span>
    </Form>
  );
};
