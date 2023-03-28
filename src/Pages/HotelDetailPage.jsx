import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Components/Header"
import ImgSlider from "../Components/HotelDetail_ImgSlider"
import HotelInfo from "../Components/HotelDetail_HotelInfo"
import Reservation from "../Components/HotelDetail_Reservation"
import Review from "../Components/HotelDetail_Review"
import styles from "../Styles/HotelDetailPage.module.css"

function HotelDetailPage() {
    const [apiData, setApiData] = useState();
    const [isClicked, setisClicked] = useState(false);
    const [reservationClick, setReservationClick] = useState(true);
    const [infoClick, setInfoClick] = useState(false);
    const [reviewClick, setReviewClick] = useState(false);

    useEffect(() => {
        axios.get('http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/hotel/7')
        .then(res => setApiData(res.data))
        .catch(error => console.log(error))
    }, [])

    const paintComment = () => {
        if(apiData?.partnerTalk.length > 60) {
            return apiData?.partnerTalk.substr(0, 60)+" ..."
        } else {
            return apiData?.partnerTalk
        }
    }

    const activeMenu = (name) => {
        setReservationClick(false);
        setInfoClick(false);
        setReviewClick(false);
        name(true);
    }
    
    return (
        <>
        <Header />
        <div className={styles.contents_wrap}>
            <div className={styles.top_contents}>
                <ImgSlider data={apiData} />
                <div className={styles.right_contents}>
                    <div className={styles.info}>
                        {/* 현재 API 상 모든 호텔 accommodationName 값이 null */}
                        <h2>광안리 고유호텔-구.광안리W</h2>
                        <div className={styles.score_wrap}>
                            <span>9.7</span>
                            최고에요
                        </div>
                        <p>{apiData?.address}</p>
                    </div>
                    <div className={styles.comment_wrap}>
                        <div className={styles.comment_top}>
                            <strong>사장님 한마디</strong>
                            <span onClick={() => setisClicked(prev => !prev)}>{isClicked ? "접기" : "더보기"}</span>
                        </div>
                        <div className={styles.comment_contents}>
                            {isClicked ? apiData?.partnerTalk : paintComment()}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom_contents}>
                <div className={styles.tap}>
                    <p onClick={() => activeMenu(setReservationClick)} className={reservationClick ? styles.tap_on : null} >객실안내/예약</p>
                    <p onClick={() => activeMenu(setInfoClick)}  className={infoClick ? styles.tap_on : null} >숙소정보</p>
                    <p onClick={() => activeMenu(setReviewClick)} className={reviewClick ? styles.tap_on : null} >리뷰</p>
                </div>
                    {reservationClick ? <Reservation /> : null}
                    {infoClick ? <HotelInfo data={apiData} /> : null}
                    {reviewClick ? <Review /> : null}
            </div>
        </div>
        </>
    )
}

export default HotelDetailPage