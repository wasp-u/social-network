import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';
import profile_icon from './icons/profile_icon.svg'
import friends_icon from './icons/friends_icon.svg'
import sms_icon from './icons/sms_icon.svg'
import community_icon from './icons/community_icon.svg'
import feed_icon from './icons/feed_icon.svg'
import setting_icon from './icons/setting_icon.svg'
import ads_icon from './icons/ads_icon.svg'
import saved_icon from './icons/saved_icon.svg'
import documents_icon from './icons/documents_icon.svg'
import covid_icon from './icons/covid_icon.svg'

const SideLink = (props) => {
    return (
        <div className={s.side_link}>
            <NavLink to={props.path}>
                <img src={props.icon_path} alt="" />
                <p>{props.text}</p>
            </NavLink>
        </div>
    );
}

const Sidebar = (props) => {
    return (
        <nav className={'nav ' + s.nav}>
            <SideLink path={`/profile/${props.myId}`} icon_path={profile_icon} text='My profile' />
            <SideLink path="/friends" icon_path={friends_icon} text='Friends' />
            <SideLink path="/dialog" icon_path={sms_icon} text='Messages' />
            <SideLink path="/community" icon_path={community_icon} text='Community' />
            <SideLink path="/feed" icon_path={feed_icon} text='Feed' />
            <SideLink path="/settings" icon_path={setting_icon} text='Settings' />
            <hr className={s.hr_line} />
            <SideLink path='s' icon_path={ads_icon} text='Ads' />
            <SideLink path='s' icon_path={saved_icon} text='Saved' />
            <SideLink path='s' icon_path={documents_icon} text='Documents' />
            <hr className={s.hr_line} />
            <SideLink path='s' icon_path={covid_icon} text='Covid-19' />
            <SideLink path='/users' icon_path={covid_icon} text='Users' />
        </nav >
    );
}

export default Sidebar;
