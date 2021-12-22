import React, { useEffect, useState } from "react"
import style from './Bio.module.css';

const StatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        props.editSuccess && setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div className={style.status} onDoubleClick={activateEditMode}>{
        }
            {!editMode
                ? <div>
                    <span >{props.status}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
                </div>
            }
        </div>

    )
}

export default StatusWithHooks
