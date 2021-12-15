import classes from './FormControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.form_control + ' ' + (hasError ? classes.error : '')}>
            <textarea {...input} {...meta} {...props} />
            <span>{hasError ? meta.error : ''}</span>
        </div>
    )
}
export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.form_control + ' ' + (hasError ? classes.error : '')}>
            <input {...input} {...meta} {...props} />
            <span>{hasError ? meta.error : ''}</span>
        </div>
    )
}
