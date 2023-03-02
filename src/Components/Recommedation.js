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
        <>
            <img className="recommendation_img" alt="사진" src={imgUrl}></img>
            <div className="description_box">
                <div>
                    <p>{star}</p>
                </div>
                <strong>{maintext}</strong>
                <p>
                    <span>{score}</span>
                    <span>{evaluateRecommend()}</span>
                    <span>{review_num}</span>
                </p>
                <p>{location}</p>
            </div>
            <div className="price_box">
                <p>
                    <b>{price}</b>
                </p>
            </div>
        </>
    )
}

export default Recommendation