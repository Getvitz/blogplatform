import React from "react";
import { v4 as uuid } from "uuid";
import { Tag } from "antd";
import { Link, useNavigate } from "react-router-dom";
import format from "date-fns/format";
import styles from './articlepreview.module.scss';
import likesheart from "../../assets/img/likesheart.svg";
import likesfilled from "../../assets/img/like-filled.svg";
import { IArticle } from "../../typescript/types/types";
import { useAppSelector, useAppDispatch } from '../../typescript/hooks'
import deleteModal from "../forms/modal/modal";
import { setEditMode, toggleFavorite } from "../../redux/actions/actions";
import { deleteArticle, unFavoriteArticle, favoriteArticle } from "../../apiClient";
import { getArticleAuthor, getCurrentUser, getUserStatus, getToken } from "../../redux/selectors/selectors";


const Articlepreview: React.FC<IArticle> = (article: IArticle) => {

    const {title, slug, author, description, createdAt, tagList, favoritesCount, favorited} = article;
    const creationDate = createdAt ? format(new Date(createdAt), 'LLLL d, y') : null;
    const tags = tagList ? tagList.map((tag) => tag && <Tag key={uuid()}>{tag}</Tag>) : null;

    const articleAuthor = useAppSelector(getArticleAuthor);
    const currentUser = useAppSelector(getCurrentUser);
    const isUserSignedIn = useAppSelector(getUserStatus);
    const token = useAppSelector(getToken);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onEdit = () => {
        dispatch(setEditMode(true))
        navigate(`/articles/${slug}/edit`)
    }

    const onDelete = () => {
        deleteArticle(slug, token);
        navigate('/')
    }

    const onFavorited = () => {
        if(favorited) {
        unFavoriteArticle(slug, token)
        .then((body) => dispatch(toggleFavorite(body.article)))
        }
        else {
        favoriteArticle(slug, token)
        .then((body) => {dispatch(toggleFavorite(body.article))})
        }
    }

  return (
    <div className={styles.information}>
        <div className={styles.header}>
            <div className={styles.postinfo}>
                <div className={styles.title}>
                    <Link to={`/articles/${slug}`} className={styles.titletext}>{title}</Link>
                    <div className={styles.likes}>
                        <button data-tooltip="Rate this article" type="button" disabled={!isUserSignedIn} onClick={() => onFavorited()}><img src={favorited ? likesfilled : likesheart} alt="like-img" /></button>
                        <span>{favoritesCount}</span>
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
                <button type="button" className={styles.editbtn} onClick={() => onEdit()}>Edit</button>
            </div>}
        </div>
    </div>
  );
}
  
export default Articlepreview;