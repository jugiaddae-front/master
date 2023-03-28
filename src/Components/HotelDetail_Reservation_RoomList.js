import styles from "../Styles/Reservation_RoomList.module.css"


function ReservationRoomList() {
return (
    <div className={styles.room_wrap}>
        <img src="//image.goodchoice.kr/resize_370x220/affiliate/2022/10/26/63588bfe04b86.jpg" alt="모켄풀빌라 | 풀빌라 랜덤배정" />
        <div className={styles.summary_wrap}>
            <h3>풀빌라 랜덤지정</h3>
            <div className={styles.info}>
                <div className={styles.price}>
                    <strong>가격</strong>
                    <strong style={{"fontSize" : "20px"}}>99,000원</strong>
                </div>
                <button className={styles.guide}>객실 이용 안내</button>
                <button className={styles.reservation_btn}>예약</button>
            </div>
        </div>
    </div>
)
}

export default ReservationRoomList