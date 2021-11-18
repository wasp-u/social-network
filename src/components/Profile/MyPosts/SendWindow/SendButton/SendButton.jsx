import s from './SendButton.module.css';

const SendButton = () => {
    return (
        <div className={s.sendbutton}>
            <button onClick={() => { alert('Hello world') }} >Send</button>
        </div>
    );
}

export default SendButton;