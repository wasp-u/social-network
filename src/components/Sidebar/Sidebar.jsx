import classes from './Sidebar.module.css';


const Sidebar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="#s">Profile</a></li>
                <li><a href="#s">Friends</a></li>
                <li><a href="#s">Feed</a></li>
                <li><a href="#s">Community</a></li>
                <li><a href="#s">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Sidebar;