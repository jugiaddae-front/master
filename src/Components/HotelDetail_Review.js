import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../Styles/Detail_Review.module.css"
import ReviewList from "./HotelDetail_Review_ReviewList"
import Star from "./Star"

function Review() {

    const [reviewData, setReviewData] = useState()

    useEffect(() => {
        axios.get('http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/review/7')
        .then(res => setReviewData(res.data))
        .catch(error => console.log(error))
    }, [])

    function starAverage() {
        let numbers = [];
        for(let i=0; i<reviewData?.length; i++) {
            numbers.push(reviewData[i].rating)
        }
        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const average = sum / numbers.length;
        return average
    }

    function starArr(num) {
        let arr = [];
        if(num%2 === 0){
            for(let i=1; i<=num/2; i++) {
                arr.push(14)
            }
            for(let i=1; i<=5-num/2; i++) {
                arr.push(0)
            }
        } else {
            for(let i=1; i<=Math.floor(num/2); i++) {
                arr.push(14)
            }
            arr.push(7);
            for(let i=1; i<=5-Math.ceil(num/2); i++) {
                arr.push(0)
            }
        }
        return arr
    }

    function evaluateRecommend() {
        if(starAverage() > 9.5) {
            return "최고에요"
        } else if (starAverage() > 9.0) {
            return "추천해요"
        } else if (starAverage() >= 8.0) {
            return "만족해요"
        } else if (starAverage() < 8.0) {
            return "좋아요"
        }
    }
    
    return (
        <article>
            <div className={styles.score_top}>
                <strong>{evaluateRecommend()}</strong>
                <div className={styles.score_wrap}>
                    <div className={styles.star_score}>
                        {starArr(starAverage())?.map((ele, idx) => <Star fill={ele} id={idx} />)}
                    </div>
                    <div>{Number.isInteger(starAverage()) ? `${starAverage()}.0` : starAverage()}</div>
                </div>
                <p >
                    전체리뷰
                    <b>251</b>
                </p>
                <button className={styles.post_btn}>리뷰 등록</button>
            </div>
            
            <ul className={styles.list_wrap}>
                {reviewData?.map((ele, idx) => <li key={ele.reviewId}><ReviewList data={ele} /></li>)}
            </ul>
        </article>
    )
    }
    
    export default Review