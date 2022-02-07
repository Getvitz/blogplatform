import React from "react";
import { Link } from "react-router-dom";
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.widthwrapper}>
        <Link to='/' className={styles.title}>
            Realworld Blog
        </Link>
        <div className={styles.userinfo}>
            <div className={styles.unsigned}>
                <button type="button" className={styles.signinbtn}>Sign in</button>
                <button type="button" className={styles.signupbtn}>Sign up</button>
            </div>
            <div className={styles.signed}>
                <button type="button">Create</button>
                <img src="#" alt="user_avatar" />
                <button type="button">Sign up</button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Header;