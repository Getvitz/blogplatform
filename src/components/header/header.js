import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import styles from './header.module.scss';
import { logOutUser } from "../../store/actions";

function Header() {
    const dispatch = useDispatch();
    const isUserSignedIn = useSelector(state => state.user.signedin);
    const username = useSelector(state => state.user.username);
    const image = useSelector(state => state.user.image);
    const navigate = useNavigate();

    const logOut = () => {
        dispatch(logOutUser());
        Cookies.remove('token')
        Cookies.remove('user');;
        navigate('/')
    }

  return (
    <div className={styles.header}>
        <div className={styles.widthwrapper}>
        <Link to='/articles' className={styles.title}>
            Realworld Blog
        </Link>
        <div className={styles.userinfo}>
            {!isUserSignedIn ? <div className={styles.unsigned}>
                <Link to="/sign-in"><button type="button" className={styles.signinbtn}>Sign in</button></Link>
                <Link to="/sign-up"><button type="button" className={styles.signupbtn}>Sign up</button></Link>
            </div> :
            <div className={styles.signed}>
                <button className={styles.createbtn} type="button">Create article</button>
                <Link to="/profile" className={styles.user}><span>{username}</span><img className={styles.avatar} src={image} alt="user_avatar" /></Link>
                <button className={styles.logoutbtn} type="button" onClick={logOut}>Log out</button>
            </div>}
        </div>
        </div>
    </div>
  );
}

export default Header;