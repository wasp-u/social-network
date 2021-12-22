import s from './Bio.module.css';
import StatusWithHooks from './StatusWithHooks';
import emptyAvatar from "./../../../icons/empty-avatar.png"

const Bio = (props) => {

    const onMainPhotoSelected = (e) => {
        e.target.files[0] && props.savePhoto(e.target.files[0]);
    }
    const editSuccess = (props.profile.userId === props.myID)

    return (
        <div className={s.bio}>
            <div className={s.bio_img}>
                <img src={props.profile.photos.large || emptyAvatar} alt='user avatar' />
                {editSuccess
                    && <div>
                        <label for="myfile2">+ Photo</label>
                        <input type="file" id="myfile2" name="myfile2" onChange={onMainPhotoSelected} />
                    </div>}
            </div>
            <div className={s.bio_info}>
                <div className={s.name}>
                    <p>{props.profile.fullName}</p>
                </div>
                <StatusWithHooks editSuccess={editSuccess} status={props.profileStatus} updateProfileStatus={props.updateProfileStatus} />
            </div>
            <div>
                <div>Looking for a lob: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
                <div>Professional skills: {props.profile.lookingForAJobDescription}</div>
                <div>
                    {Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                    })
                    }
                </div>
            </div>
        </div>
    );
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div><b>{contactTitle}: </b>{contactValue}</div>
    )
}

export default Bio;