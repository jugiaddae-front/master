import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from "../Styles/Recommedation.module.css"

function Recommendation({id, imgUrl, star, maintext, score, review_num, location, price}) {

    const navigate = useNavigate();
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
        <div className={styles.main_contents_box} onClick={(e) => {
            navigate('/detailpage', {
                state: {
                    id: id,
                    imgUrl: imgUrl,
                    star: star,
                    maintext: maintext,
                    score: score,
                    review_num: review_num,
                    location: location,
                    price: price
                }
            })
        }}>
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