import React, {useEffect} from 'react';
import { Form, Input, Button } from 'antd';
import styles from './editprofile.module.scss'


export default function EditProfileForm() {
  const [form] = Form.useForm();

   useEffect(() => {
		form.setFieldsValue({
			email: 'vasya@ya.da',
      username: 'Vasiliy'
		});
	}, [form]);

    const onFinish = values => {
      form.resetFields();
      const formData = {
        "user": {
          "username": values.username,
          "email": values.email,
          "password": values.password,
          "avatar": values.image
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
      className={styles.loginform}
      onFinish={onFinish}
    >
      <div className={styles.title}>
        <span>Edit Profile</span>
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
        label="New Password"
        name="password"
        hasFeedback
        rules={[
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
        label="Avatar image (url)"
        name="image"
        hasFeedback
        rules={[
          {
            type: 'url',
            warningOnly: true,
            message: "Must be a valid url"
          },
        ]}
      >
        <Input placeholder="Avatar image" />
      </Form.Item>
      <Form.Item shouldUpdate className={styles.submit}>
        { () => (<Button 
          type="primary" 
          htmlType="submit" 
          className={styles.savebtn} 
          disabled={
            !form.isFieldsTouched(true) ||
            form.getFieldsError().filter(({ errors }) => errors.length).length
          }>
          Save
        </Button>)}
      </Form.Item>
    </Form>
  );
};
