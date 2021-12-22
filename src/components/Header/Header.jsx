import s from './Header.module.css';
import logo from './logo.svg'
import music_logo from './music.svg'
import notification from './notification.svg'
import avatar from './avatar.png'
import arrow_down from './arrow_down.svg'
import { NavLink } from 'react-router-dom';

const ProfileMenu = (props) => {
    const logoutClick = () => {
        props.logout();
    }

    return (
        <div className={s.profile_menu}>
            <p>{props.login}</p>
            <img className={s.avatar} src={avatar} alt="" />
            <img className={s.arrow} src={arrow_down} alt="" />
            <button onClick={logoutClick}>Logout</button>
        </div>
    );
}

const Buttons = () => {
    return (
        <div className={s.buttons}>
            <div className={s.music_img}>
                <img src={music_logo} alt="" />
            </div>
            <div className={s.notification_img}>
                <img src={notification} alt="" />
            </div>
        </div>
    );
}

const Search = () => {
    return (
        <div className={s.search} >
            <input placeholder="Search" type="text" />
        </div >
    );
}

const Logo = () => {
    return (
        <div className={s.logo}>
            <img src={logo} alt="??" />
        </div>
    );
}



const Header = (props) => {
    return (
        <div className={s.header_bg}>
            <header className={"wrapper " + s.header}>
                <Logo />
                <Search />
                <div className={s.flex_container}>
                    <Buttons />
                    {props.isAuth
                        ? <ProfileMenu login={props.data.login} logout={props.logout} />
                        : <NavLink to='/login'> Login</NavLink>}

                </div>
            </header>
        </div>

    );
}

export default Header;