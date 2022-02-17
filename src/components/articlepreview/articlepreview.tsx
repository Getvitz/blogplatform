import React from "react";
import { v4 as uuid } from "uuid";
import { Tag } from "antd";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import styles from './articlepreview.module.scss';
import likesheart from "../../assets/img/likesheart.svg";
import { ArticleType } from "../../typescript/types/types";


const Articlepreview: React.FC<ArticleType> = (article: ArticleType) => {
    const {title, slug, author, description, createdAt, tagList} = article;
    const creationDate = createdAt ? format(new Date(createdAt), 'LLLL d, y') : null;

    const tags = tagList ? tagList.map((tag) => tag && <Tag key={uuid()}>{tag}</Tag>) : null;
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
        <div className={styles.previewtext}>{description}</div>
    </div>
  );
}
  
export default Articlepreview;