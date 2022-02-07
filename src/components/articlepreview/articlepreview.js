import React from "react";
import { Tag } from "antd";
import { Link } from "react-router-dom";
import styles from './articlepreview.module.scss';
import likesheart from "../../assets/img/likesheart.svg"
import avatar from "../../assets/img/avatar.svg"

function Articlepreview() {

    // const getArticle = () => {

    // }

  return (
    <div className={styles.information}>
        <div className={styles.header}>
            <div className={styles.postinfo}>
                <div className={styles.title}>
                    <Link to='/articles/1' className={styles.titletext}>Some article title</Link>
                    <div className={styles.likes}>
                        <img src={likesheart} alt="img" />
                        <span>12</span>
                    </div>
                </div>
                <div className={styles.taglist}>
                <Tag className={styles.tag}>Tag1</Tag>
                <Tag className={styles.tag}>SomeTag2</Tag>
                </div>
            </div>
            <div className={styles.userinfo}>
                <div className={styles.namedate}>
                    <div className={styles.name}>John Doe</div>
                    <div className={styles.date}>March 5, 2020 </div>
                </div>
                <img src={avatar} alt="user_avatar" />
            </div>
        </div>
        <div className={styles.previewtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </div>
    </div>
  );
}

export default Articlepreview;