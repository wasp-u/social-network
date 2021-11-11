import s from './Bio.module.css';

const Bio = () => {
    return (
        <div className={s.bio}>
            <div className={s.bio_img}></div>
            <div className={s.bio_info}>
                <div className={s.name}>
                    <p>Yurii Osadchii</p>
                </div>
                <div>
                    <p>Date of Birthd: 21 April</p>
                </div>
                <div>
                    <p>City: Kyiv</p>
                </div>
                <div>
                    <p>Education: KPI</p>
                </div>
            </div>
        </div>
    );
}

export default Bio;