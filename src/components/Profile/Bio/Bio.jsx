import classes from './Bio.module.css';

const Bio = () => {
    return (
        <div className={classes.bio}>
            <div className={classes.bio_img}></div>
            <div className={classes.bio_info}>
                <div className={classes.name}>
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