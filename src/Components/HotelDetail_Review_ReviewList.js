import styles from "../Styles/Review_ReviewList.module.css"
import Star from "./Star"

function ReviewList() {
return (
    <div className={styles.list_wrap}>
        <img className={styles.profile_img} src="//image.goodchoice.kr/profile/ico/ico_22.png" alt="Profile"></img>
        <div className={styles.contents_wrap}>
            <strong>짱이에요!!</strong>
            <div className={styles.score_wrap}>
                <div>{[14, 14, 14, 14, 14].map((ele, idx) => <Star fill={ele} id={`small${idx}`} isSmall={true} />)}</div>
                <div className={styles.score_num}>10.0</div>
            </div>
            <div className={styles.name}>
                <b>[단독특가] 체크인 시 배정 객실 이용 · 아흔아홉매머드</b>
            </div>
            <div className={styles.txt}>
                안녕하세요? 숙소가 정말 좋더라고요. 숙소 안에 스타일러랑 분리수거장이 있다니! 게다가 뭐더라 애플페이로 음료를 살 수 있는 자판기도 있는 "최신식" 호텔입니다. 아무튼 정말 짱이고 짱입니다.
            </div>
            <div className={styles.gallery}>
            </div>
            <span className={styles.date}>9시간 전</span>
        </div>
    </div>
)
}

export default ReviewList