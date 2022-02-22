import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import styles from './header.module.scss';
import { logOutUser, setEditMode } from "../../redux/actions/actions";
import { useAppSelector, useAppDispatch } from '../../typescript/hooks'
import { getCurrentUser, isSignedIn, getImage } from "../../redux/selectors/selectors";

const Header: React.FC = () => {

    const dispatch = useAppDispatch();

    const isUserSignedIn = useAppSelector(isSignedIn)
    const username = useAppSelector(getCurrentUser)
    const image = useAppSelector(getImage)
    
    const navigate = useNavigate();

    const createArticle = () => {
        dispatch(setEditMode(false))
    }

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
                <Link to="/new-article"><button className={styles.createbtn} type="button" onClick={() => createArticle()}>Create article</button></Link>
                <Link to="/profile" className={styles.user}><span>{username}</span><img className={styles.avatar} src={image} alt="user_avatar" /></Link>
                <button className={styles.logoutbtn} type="button" onClick={logOut}>Log out</button>
            </div>}
        </div>
        </div>
    </div>
  );
}

export default Header;