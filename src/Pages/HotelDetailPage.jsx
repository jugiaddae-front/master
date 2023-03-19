import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Components/Header"
import ImgSlider from "../Components/HotelDetail_ImgSlider"
import HotelInfo from "../Components/HotelDetail_HotelInfo"
import styles from "../Styles/HotelDetailPage.module.css"

function HotelDetailPage() {
    const [apiData, setApiData] = useState();
    const [isClicked, setisClicked] = useState(false);
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
    
    return (
        <>
        <Header />
        <div className={styles.contents_wrap}>
            <div className={styles.top_contents}>
                <ImgSlider />
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
                    <p>객실안내/예약</p>
                    <p className={styles.tap_on}>숙소정보</p>
                    <p>리뷰</p>
                </div>
                    <HotelInfo />
            </div>
        </div>
        </>
    )
}

export default HotelDetailPage