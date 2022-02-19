import React from "react";
import { v4 as uuid } from "uuid";
import { Tag } from "antd";
// import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";
import format from "date-fns/format";
import styles from './articlepreview.module.scss';
import likesheart from "../../assets/img/likesheart.svg";
import { ArticleType } from "../../typescript/types/types";
import { useAppSelector, useAppDispatch } from '../../typescript/hooks'
import { RootState } from "../../redux";
import deleteModal from "../forms/modal/modal";
// import { confirm } from "../forms/modal/modal";
// import { deleteArticle } from "../../apiClient";
import { setEditMode } from "../../redux/actions/actions";
import { deleteArticle } from "../../apiClient";


const Articlepreview: React.FC<ArticleType> = (article: ArticleType) => {
    const {title, slug, author, description, createdAt, tagList} = article;
    const creationDate = createdAt ? format(new Date(createdAt), 'LLLL d, y') : null;

    const getArticleAuthor = (state: RootState) => state.articles.article.author.username;
    const getCurrentUser = (state: RootState) => state.user.username;
    const getUserStatus = (state: RootState) => state.user.signedin;
    const getArticleSlug = (state: RootState) => state.articles.article.slug;
    const getToken = (state: RootState) => state.user.token;

    const articleAuthor = useAppSelector(getArticleAuthor);
    const currentUser = useAppSelector(getCurrentUser);
    const isUserSignedIn = useAppSelector(getUserStatus);
    const articleSlug = useAppSelector(getArticleSlug);
    const token = useAppSelector(getToken);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const editArticle = () => {
        dispatch(setEditMode(true))
        navigate(`/articles/${articleSlug}/edit`)
    }

    const tags = tagList ? tagList.map((tag) => tag && <Tag key={uuid()}>{tag}</Tag>) : null;

    // const { confirm } = DeleteModal;
    // function showConfirm() {
    //     confirm({
    //       title: 'Do you Want to delete these items?',
    //       icon: <ExclamationCircleOutlined />,
    //       content: 'Some descriptions',
    //       onOk() {
    //         console.log('OK');
    //       },
    //       onCancel() {
    //         console.log('Cancel');
    //       },
    //     });
    //   }
    const onDelete = () => {
        deleteArticle(slug, token)
    }

  return (
    <div className={styles.information}>
        <div className={styles.header}>
            <div className={styles.postinfo}>
                <div className={styles.title}>
                    <Link to={`/articles/${slug}`} className={styles.titletext}>{title}</Link>
                    <div className={styles.likes}>
                        <img src={likesheart} alt="like-img" />
                        <span>12</span>
                    </div>
                </div>
                <div className={styles.taglist}>
                    {tags}
                </div>
            </div>
            <div className={styles.userinfo}>
                <div className={styles.namedate}>
                    <div className={styles.name}>{author.username}</div>
                    <div className={styles.date}>{creationDate}</div>
                </div>
                <img className={styles.authoravatar} src={author.image} alt="user_avatar" />
            </div>
        </div>
        <div className={styles.additionalinfo}>
            <div className={styles.previewtext}>{description}</div>
            {currentUser === articleAuthor && isUserSignedIn && <div className={styles.articlebtns}>
                <button type="button" className={styles.delbtn} onClick={() => deleteModal(onDelete)}>Delete</button>
                <button type="button" className={styles.editbtn} onClick={() => editArticle()}>Edit</button>
            </div>}
        </div>
    </div>
  );
}
  
export default Articlepreview;