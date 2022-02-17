import React, {useEffect} from 'react';
import { Form, Input, Button } from 'antd';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import styles from './editprofile.module.scss'
import { updateUser } from '../../../apiClient';
import { setUserData } from '../../../redux/actions/actions';
import { useAppSelector, useAppDispatch } from '../../../typescript/hooks'
import { RootState } from "../../../redux";
import { FormDataType } from '../../../typescript/types/types';


const EditProfileForm: React.FC = () => {
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getStateUsername = (state: RootState) => state.user.username;
  const getStateEmail = (state: RootState) => state.user.email;
  const getToken = (state: RootState) => state.user.token;

  const stateUsername = useAppSelector(getStateUsername)
  const stateEmail = useAppSelector(getStateEmail)
  const token = useAppSelector(getToken)


   useEffect(() => {
		form.setFieldsValue({
			email: stateEmail,
      username: stateUsername
		});
	}, [form, stateEmail, stateUsername]);

    const onFinish = (values: FormDataType) => {
      form.resetFields();
      const formData = {
          "email": values.email,
          "username": values.username,
          "password": values.password,
          "image": values.image,
      }
      updateUser(formData, token)
      .then((body) => {
        if(body.errors) {
          form.setFields([
          {
            name: 'warning',
            errors: [body.errors.message],
          },
       ])
      }
    else {
        dispatch(setUserData(body.user));
        Cookies.set('token', body.user.token)
        navigate('/')
  }});  
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
      <Form.Item className={styles.title} name='warning'>
        <span>Edit Profile</span>
      </Form.Item>
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
            message: "Must be a valid url"
          },
        ]}
      >
        <Input placeholder="Avatar image" />
      </Form.Item>
      <Form.Item shouldUpdate className={styles.submit}>
        <Button 
          type="primary" 
          htmlType="submit" 
          className={styles.savebtn} 
          >
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProfileForm;
