import s from './Bio.module.css';
import Status from './Status';
import StatusWithHooks from './StatusWithHooks';

const Bio = (props) => {
    return (
        <div className={s.bio}>
            <div className={s.bio_img}>
                <img src={props.profile.photos.large} alt="" />
            </div>
            <div className={s.bio_info}>
                <div className={s.name}>
                    <p>{props.profile.fullName}</p>
                </div>
                <StatusWithHooks status={props.profileStatus} updateProfileStatus={props.updateProfileStatus} />
            </div>
        </div>
    );
}

export default Bio;