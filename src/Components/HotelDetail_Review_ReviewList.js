import styles from "../Styles/Review_ReviewList.module.css"
import Star from "./Star"

function ReviewList({data}) {

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

    function to_date() {
    let yyyyMMdd = String(data.regDt);
    let sYear = yyyyMMdd.substring(0,4);
    let sMonth = yyyyMMdd.substring(5,7);
    let sDate = yyyyMMdd.substring(8,10);
    let sHours = yyyyMMdd.substring(11,13);
    let sMin = yyyyMMdd.substring(14,16);
    let sSec = yyyyMMdd.substring(17,19);

    return new Date(Number(sYear), Number(sMonth)-1, Number(sDate), Number(sHours), Number(sMin), Number(sSec));
}

function paintTimeStamp() {
    let now = new Date().getTime();
    let post = to_date().getTime();

    let diff = now - post;

    let second = Math.floor(diff / 1000);
    let minute = Math.floor(diff / (1000 * 60));
    let hour = Math.floor(diff / (1000 * 60 * 60));
    let day = Math.floor(diff / (1000 * 60 * 60 * 24));
    let month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    let year = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));

    if (year > 0) {
        return `${year}년 전`;
      } else if (month > 0) {
        return `${month}개월 전`;
      } else if (day > 0) {
        return `${day}일 전`;
      } else if (hour > 0) {
        return `${hour}시간 전`;
      } else if (minute > 0) {
        return `${minute}분 전`;
      } else {
        return `${second}초 전`;
      }
}

return (
    <div className={styles.list_wrap}>
        <img className={styles.profile_img} src="//image.goodchoice.kr/profile/ico/ico_22.png" alt="Profile"></img>
        <div className={styles.contents_wrap}>
            <strong>{data.title}</strong>
            <div className={styles.score_wrap}>
                <div>{starArr(data.rating).map((ele, idx) => <Star fill={ele} id={`small${idx}`} isSmall={true} />)}</div>
                <div className={styles.score_num}>{Number.isInteger(data.rating) ? `${data.rating}.0` : data.rating}</div>
            </div>
            <div className={styles.name}>
                <b>[단독특가] 체크인 시 배정 객실 이용 · 아흔아홉매머드</b>
            </div>
            <div className={styles.txt}>
                {data.content}
            </div>
            <div className={styles.gallery}>
            </div>
            <span className={styles.date}>{paintTimeStamp()}</span>
        </div>
    </div>
)
}

export default ReviewList