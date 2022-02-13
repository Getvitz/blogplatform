import React from "react";
import { Link } from "react-router-dom";
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.widthwrapper}>
        <Link to='/articles' className={styles.title}>
            Realworld Blog
        </Link>
        <div className={styles.userinfo}>
            <div className={styles.unsigned}>
                <Link to="/sign-in"><button type="button" className={styles.signinbtn}>Sign in</button></Link>
                <Link to="/sign-up"><button type="button" className={styles.signupbtn}>Sign up</button></Link>
            </div>
            <div className={styles.signed}>
                <button type="button">Create article</button>
                <Link to="/profile"><img src="#" alt="user_avatar" /></Link>
                <button type="button">Log out</button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Header;