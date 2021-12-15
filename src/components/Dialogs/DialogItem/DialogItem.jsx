import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialog/${props.id}`}>
            <div className={`item ` + s.item + ' ' + (props.active ? s.active : "")}>
                <img className={s.item_avatar} src={props.userAvatar} alt="" />
                <div className={s.item_text}>
                    <p>{props.userName}</p>
                    <p>{props.newestMassage}</p>
                </div>
            </div>
        </NavLink>
    );
}

export default DialogItem;