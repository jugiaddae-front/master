import { useState } from "react";
import styles from "../Styles/RoomList.module.css"
import BigLocationList from "../Components/BigLocationList"
import FilterMenu from "../Components/FilterMenu";
import ButtonFilter from "../Components/ButtonFilter";
import Recommendation from "../Components/Recommedation";




function RoomList() {
    const [menuHidden, setMenuHidden] = useState({toggle : true, count : false});
    const [locationName, setLocationName] = useState("서울 > 강남/역삼/삼성/신사/청담");
    

    const mouseEvent = () => {
        setMenuHidden((prev) => {return {...prev, toggle : false}});
    }

    const mouseCount = () => {
        setMenuHidden((prev) => {return {...prev, count : true}})
    }

    const mouseLeave = () => {
        setMenuHidden((prev) => {return {...prev, toggle : true, count : false}})
    }

    const getLocationData = (data) => setLocationName(data)

    return (
        <div className={styles.page_center}>
            <header className={styles.header_layout}>
            <div className={styles.top_box}>
                <h1>여기어때</h1>
                <nav>
                    <ul className={styles.nav_box}>
                        <li>내주변</li>
                        <li>예약내용</li>
                        <li>더보기</li>
                        <li>로그인</li>
                    </ul>
                </nav>
            </div>
            <div>
            <h2>호텔·리조트</h2>
            <div className="location_dropdown" onMouseEnter={mouseEvent}>{locationName}</div>
            <div className={`${styles.location_box} ${menuHidden.toggle && menuHidden.count === false ? styles.hidden : null}` }
            onMouseEnter={mouseCount}
            onMouseLeave={mouseLeave}>
            <BigLocationList getLocationData={getLocationData} />
            </div>
            </div>
            </header>
            <main>
            <FilterMenu />
            <ButtonFilter />
            <strong>인기추천</strong>
            <Recommendation 
            imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg"
            star= "3성급"
            maintext="★당일특가★ 호텔 델루나"
            score="9.2"
            review_num="(760)"
            location="강남구"
            price="140,000원"
            />
            </main>
        </div>
    )
}

export default RoomList;