import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import styles from "../Styles/RoomList.module.css"

import Header from "../Components/Header";
import BigLocationList from "../Components/BigLocationList"
import FilterMenu from "../Components/FilterMenu";
import ButtonFilter from "../Components/ButtonFilter";
import Recommendation from "../Components/Recommedation";
import dropDownArrow from "../img/dropdown_arrow.png"

function RoomList() {
    const location = useLocation();
    console.log(location);

    let searchData = [];

    if (location.state !== null) {
        for (var i = 0; i < location.state.postList.length; i++) {
            searchData.push(location.state.postList[i]);
        }
    }
    else {
        postInfo();
    }
    console.log(searchData);

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

    async function postInfo(e) {
        try {
            const response = await axios
            .post("http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/hotel?skip=0&take=10", {});
            for (var i = 0; i < response.data.length; i++) {
                searchData.push(response.data[i]);
            }
            console.log(searchData);
        }
        catch(err) {
            console.log(err);
        }
    }

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
                            {searchData.map(
                                (ele, idx) =>
                                    <Recommendation
                                        key={ele.id}
                                        id={ele.id}
                                        imgUrl={ele.hotelImage.mainUrl}
                                        star="3성급"
                                        maintext={ele.name}
                                        score="9.2"
                                        review_num="(760)"
                                        location={ele.address}
                                        price="140,000원"
                                />)
                }
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </>
    )
}

export default RoomList;