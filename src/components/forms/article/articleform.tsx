import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Space } from 'antd';
import styles from './articleform.module.scss'
import { createArticle } from '../../../apiClient';
import { ArticleType } from '../../../typescript/types/types';
import { useAppSelector } from '../../../typescript/hooks'
import { RootState } from "../../../redux";


const ArticleForm: React.FC = () => {
  const [form] = Form.useForm();

  const getToken = (state: RootState) => state.user.token;
  const getEditStatus = (state: RootState) => state.articles.editmode;
  const getArticleTitle = (state: RootState) => state.articles.article.title;
  const getArticleText = (state: RootState) => state.articles.article.body;
  const getArticleDescription = (state: RootState) => state.articles.article.description;
  const getArticleTagList = (state: RootState) => state.articles.article.tagList;
  
  const articleTitle = useAppSelector(getArticleTitle);
  const articleText = useAppSelector(getArticleText);
  const articleDescription = useAppSelector(getArticleDescription);
  const articleTagList = useAppSelector(getArticleTagList);

  
  const token = useAppSelector(getToken)
  const editMode = useAppSelector(getEditStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if(editMode) {
      form.setFieldsValue({
        "title": articleTitle,
        "description": articleDescription,
        "body": articleText,
        "tagList": articleTagList
      })
    }
  else {
    form.setFieldsValue({
      "title": '',
      "description": '',
      "body": '',
      "tagList": []
    })
  }}, 
    [articleDescription, articleText, articleTitle, editMode, articleTagList, form]);

    const onFinish = (values: ArticleType) => {
      const formData = {
        "title": values.title,
        "description": values.description,
        "body": values.body,
        "tagList": values.tagList
      }
      createArticle(formData, token)
      navigate('/')
    console.log('Received values of form: ', formData);
  };

  return (
    <Form
      form={form}
      layout='vertical'
      name="normal_login"
      size="large"
      initialValues={{ tags: [""] }}
      className={styles.articleform}
      onFinish={onFinish}
    >
      <div className={styles.title}>
        {!editMode ? <span>Create new article</span> : <span>Edit article</span>}
      </div>
      <Form.Item
        className={styles.articletitle}
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input article title!',
          },
        ]}
      >
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item
        className={styles.input}
        label="Short description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input short article description!"
          },
        ]}
      >
      <Input placeholder="Description" />
      </Form.Item>
      <Form.Item
      className={styles.input}
        label="Text"
        name="body"
        rules={[
          {
            required: true,
            message: 'Please input article text!',
          },
        ]}
      >
        <Input.TextArea
        rows={5}
          placeholder="Text"
        />
      </Form.Item>
      <span className={styles.span}>Tags</span>
      <div className={styles.list}>
      <Form.List name="tagList">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space className={styles.space} key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                className={styles.now}
                  {...restField}
                  name={[name]}
                >
                  <Input placeholder="Tag" />
                </Form.Item>
                <Button className={styles.deletetagbtn} type="dashed" onClick={() => remove(name)} block>
                  Delete
                </Button>
                <Button className={styles.addtagbtn} type="dashed" onClick={() => add()} block>
                  Add tag
                </Button>
              </Space>
            ))}
              {Object.keys(fields).length === 0 ? <Button className={styles.addbtn} onClick={() => add()} block>
                Add tag
              </Button>
              : null}
          </>
        )}
      </Form.List>
      </div>
      <Form.Item shouldUpdate className={styles.submit}>
        { () => (<Button 
          type="primary" 
          htmlType="submit" 
          className={styles.createbtn} 
          disabled={
            (form.getFieldsError().filter(({ errors }) => errors.length).length) > 0
          }
          >
          Create
        </Button>)}
      </Form.Item>
    </Form>
  );
};

export default ArticleForm;
