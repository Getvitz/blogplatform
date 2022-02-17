import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import styles from './header.module.scss';
import { logOutUser } from "../../redux/actions/actions";
import { useAppSelector, useAppDispatch } from '../../typescript/hooks'
import { RootState } from "../../redux";

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const isSignedIn = (state: RootState) => state.user.signedin;
    const getUsername = (state: RootState) => state.user.username;
    const getImage = (state: RootState) => state.user.image;

    const isUserSignedIn = useAppSelector(isSignedIn)
    const username = useAppSelector(getUsername)
    const image = useAppSelector(getImage)
    const navigate = useNavigate();

    const logOut = () => {
        dispatch(logOutUser());
        Cookies.remove('token')
        Cookies.remove('user');
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