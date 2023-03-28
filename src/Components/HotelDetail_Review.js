// import Star from "./Star"
import styles from "../Styles/Detail_Review.module.css"
import ReviewList from "./HotelDetail_Review_ReviewList"
import Star from "./Star"

function Review() {

// 추후 리뷰 api가 나오면 이 함수 이용
    // function evaluateRecommend() {
    //     if(score > 9.5) {
    //         return "최고에요"
    //     } else if (score > 9.0) {
    //         return "추천해요"
    //     } else if (score >= 8.0) {
    //         return "만족해요"
    //     } else if (score < 8.0) {
    //         return "좋아요"
    //     }
    // }
    
    return (
        <article>
            <div className={styles.score_top}>
                <strong>최고에요</strong>
                <div className={styles.score_wrap}>
                    <div className={styles.star_score}>
                        {[14, 14, 14, 14, 7].map((ele, idx) => <Star fill={ele} id={idx} />)}
                    </div>
                    <div>9.8</div>
                </div>
                <p >
                    전체리뷰
                    <b>251</b>
                    <span className={styles.block}>|</span>
                    <span className={styles.review_link}>운영정책 &gt;</span>
                </p>
            </div>
            <ul className={styles.list_wrap}>
                <li><ReviewList /></li>
                <li><ReviewList /></li>
                <li><ReviewList /></li>
                <li><ReviewList /></li>
            </ul>
        </article>
    )
    }
    
    export default Review