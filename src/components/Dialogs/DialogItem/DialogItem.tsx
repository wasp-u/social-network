import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

type PropsType = {
    userName: string
    userAvatar: string
    newestMassage: string
    id: number
    active: boolean
    onClick: (itemID: number) => void
}

const DialogItem: React.FC<PropsType> = ({ userName, userAvatar, newestMassage, id, active, onClick }) => {
    const itemClassName = s.item + ' ' + (active ? s.active : "")

    return (
        <NavLink to={`/dialog/${id}`} className={itemClassName} onClick={() => onClick(id)}>
            <img className={s.item_avatar} src={userAvatar} alt="" />
            <div className={s.item_text}>
                <p>{userName}</p>
                <p>{newestMassage}</p>
            </div>
        </NavLink>
    );
}

export default DialogItem;