import { useState } from 'react'
import classes from './FormControls.module.scss'

export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error

    const [onMouseOver, setMouseOver] = useState(false)

    const errorImgBlurOver = () => {
        setMouseOver(true)
    }
    const errorImgBlurOut = () => {
        setMouseOver(false)
    }

    return (
        <div className={classes.form_control}>
            <textarea {...input} {...meta} {...props} />
            {hasError && <div className={classes.error}>
                <img onMouseOver={errorImgBlurOver} onMouseOut={errorImgBlurOut} className={classes.error_icon} src='https://storage.googleapis.com/multi-static-content/thumbs/artage-io-thumb-58ad829a7fe3d2a901f96f84938bca3b.svg' alt='img' />
                {onMouseOver && <span className={classes.error_text}>{hasError ? meta.error : ''}</span>}
            </div>}
        </div>
    )
}
// export const Input = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error

//     const [onMouseOver, setMouseOver] = useState(false)

//     const errorImgBlurOver = () => {
//         setMouseOver(true)
//     }
//     const errorImgBlurOut = () => {
//         setMouseOver(false)
//     }
//     return (
//         <div className={classes.form_control + ' ' + (hasError ? classes.error : '')}>
//             <input {...input} {...meta} {...props} />
//             {hasError && <div className={classes.error}>
//                 <img onMouseOver={errorImgBlurOver} onMouseOut={errorImgBlurOut} className={classes.error_icon} src='https://storage.googleapis.com/multi-static-content/thumbs/artage-io-thumb-58ad829a7fe3d2a901f96f84938bca3b.svg' />
//                 {onMouseOver && <span className={classes.error_text}>{hasError ? meta.error : ''}</span>}
//             </div>}

//         </div>
//     )
// }
