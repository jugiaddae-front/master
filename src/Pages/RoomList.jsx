import React, { useState } from "react";
import axios from 'axios';

import styles from "../Styles/RoomList.module.css"

import Header from "../Components/Header";
import BigLocationList from "../Components/BigLocationList"
import FilterMenu from "../Components/FilterMenu";
import ButtonFilter from "../Components/ButtonFilter";
import Recommendation from "../Components/Recommedation";
import dropDownArrow from "../img/dropdown_arrow.png"

function RoomList() {
    const [locationMenuHidden, setLocationMenuHidden] = useState({toggle : true, count : false});
    const [locationName, setLocationName] = useState("서울 > 강남/역삼/삼성/신사/청담");

    const [postFacility, setPostFacility] = useState({});
    //공용시설
    const commonFacility = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

    const publicFaci = ["피트니스", "수영장", "사우나", "골프장", "레스토랑", "엘레베이터", "라운지", "공용PC", "BBQ", "카페", "공용스파", "족구장", "세미나실", "편의점", "노래방", "주방/식당", "세탁기", "건조기", "탈수기", "주차장", "취사가능", "공용샤워실", "온천", "스키장"];

    
    const mouseEvent = () => {
        setLocationMenuHidden((prev) => {return {...prev, toggle : !prev.toggle}});
    }

    const mouseCount = () => {
        setLocationMenuHidden((prev) => {return {...prev, count : !prev.count}})
    }

    const mouseLeave = () => {
        setLocationMenuHidden((prev) => {return {...prev, toggle : !prev.toggle, count : !prev.count}})
    }

    const getLocationData = (data) => setLocationName(data)

    

    return (
        <>
        <Header />
        <div className={styles.page_center}>
            <div className={styles.header}>
                <header className={styles.header_layout}>
                    <div className={styles.sub_top_box}>
                        <h2>호텔·리조트</h2>
                        <div className={styles.location_name_box} onMouseEnter={mouseEvent}>
                            <span>{locationName}</span>
                            <img alt="arrow" src={dropDownArrow} className={styles.arrow} />
                        </div>
                        <div className={`${styles.location_box} ${locationMenuHidden.toggle && locationMenuHidden.count === false ? styles.hidden : null}` }
                        onMouseEnter={mouseCount}
                        onMouseLeave={mouseLeave}>
                        <BigLocationList getLocationData={getLocationData} />
                        </div>
                    </div>
                </header>
            </div>
            <div className={styles.main_big_box}>
                <main>
                    <div className={styles.filter_box}>
                        <FilterMenu commonFacility={commonFacility} />
                    </div>
                    <div className={styles.main_box}>
                        <ButtonFilter />
                        <div className={styles.main_contents_box}>
                            <h3>인기추천</h3>
                            <Recommendation imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg" star= "3성급" maintext="★당일특가★ 호텔 델루나" score="9.2" review_num="(760)" location="강남구" price="140,000원"/>
                            <Recommendation imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg" star= "3성급" maintext="★당일특가★ 호텔 델루나" score="9.2" review_num="(760)" location="강남구" price="140,000원"/>
                            <Recommendation imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg" star= "3성급" maintext="★당일특가★ 호텔 델루나" score="9.2" review_num="(760)" location="강남구" price="140,000원"/>
                            <Recommendation imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg" star= "3성급" maintext="★당일특가★ 호텔 델루나" score="9.2" review_num="(760)" location="강남구" price="140,000원"/>
                            <Recommendation imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg" star= "3성급" maintext="★당일특가★ 호텔 델루나" score="9.2" review_num="(760)" location="강남구" price="140,000원"/>
                            <Recommendation imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg" star= "3성급" maintext="★당일특가★ 호텔 델루나" score="9.2" review_num="(760)" location="강남구" price="140,000원"/>
                            <Recommendation imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg" star= "3성급" maintext="★당일특가★ 호텔 델루나" score="9.2" review_num="(760)" location="강남구" price="140,000원"/>
                            <Recommendation imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg" star= "3성급" maintext="★당일특가★ 호텔 델루나" score="9.2" review_num="(760)" location="강남구" price="140,000원"/>
                            <Recommendation imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg" star= "3성급" maintext="★당일특가★ 호텔 델루나" score="9.2" review_num="(760)" location="강남구" price="140,000원"/>
                            <Recommendation imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg" star= "3성급" maintext="★당일특가★ 호텔 델루나" score="9.2" review_num="(760)" location="강남구" price="140,000원"/>
                            <Recommendation imgUrl="//image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg" star= "3성급" maintext="★당일특가★ 호텔 델루나" score="9.2" review_num="(760)" location="강남구" price="140,000원"/>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </>
    )
}

export default RoomList;