import styles from "../Styles/Recommedation.module.css"

function Recommendation({imgUrl, star, maintext, score, review_num, location, price}) {

    function evaluateRecommend() {
        if(score > 9.5) {
            return "최고에요"
        } else if (score > 9.0) {
            return "추천해요"
        } else if (score >= 8.0) {
            return "만족해요"
        } else if (score < 8.0) {
            return "좋아요"
        }
    }

    return (
        <div className={styles.main_contents_box}>
            <img alt="사진" src={imgUrl}></img>
            <div className={styles.description_box}>
                <div>
                    <div className={styles.star_box}>
                        <span className={styles.star_3down}>{star}</span>
                    </div>
                    <p className={styles.main_text}>{maintext}</p>
                    <p className={styles.score}>
                        <span>{score}</span>
                        <span>&nbsp;{evaluateRecommend()}</span>
                        <span>&nbsp;{review_num}</span>
                    </p>
                    <p className={styles.location}>{location}</p>
                </div>
                    <p className={styles.price_box}>
                        <b className={styles.price}>{price}</b>
                    </p>
            </div>
        </div>
    )
}

export default Recommendation