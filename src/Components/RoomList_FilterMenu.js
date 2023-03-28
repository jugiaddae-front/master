import { useState } from "react"
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Calender from "./Calender";
import styles from "../Styles/FilterMenu.module.css"
import calenderImg from "../img/calendar.png"
import plus_btn from "../img/plus.png"
import minus_btn from "../img/minus.png"

function FilterMenu() {
    const navigate = useNavigate();
    
    const [countPeople, setCountPeople] = useState(2);
    const [clickDate, setClickDate] = useState(false);
    const publicFaci = ["피트니스", "수영장", "사우나", "골프장", "레스토랑", "엘레베이터", "라운지", "공용PC", "BBQ", "카페", "공용스파", "족구장", "세미나실", "편의점", "노래방", "주방/식당", "세탁기", "건조기", "탈수기", "주차장", "취사가능", "공용샤워실", "온천", "스키장"];
    const inRoomFaci = ["객실스파", "미니바", "와이파이", "욕실용품", "TV", "에어컨", "냉장고", "객실샤워실", "욕조", "드라이기", "다리미", "전기밥솥"];
    const accFaci = ["반려견동반", "조식포함", "객실내흡연", "발렛파킹", "금연", "객실내취사", "프린터사용", "짐보관가능", "개인사물함", "무료주차", "픽업가능", "캠프파이어", "카드결제", "장애인편의시설"];

    //공용시설
    const stringPublic = ["fitness", "swimmingPool", "sauna", "golfCourse", "restaurant", "elevator", "lounge", "publicPc", "bbq", "cafe", "publicSpa", "footballGround", "meetingRoom", "convenienceStore", "singingRoom", "kitchen", "washingMachine", "dryingMachine", "spinDryer", "parkingLot", "makingFood", "publicShower", "hotSpring", "skiResort"];
    const [postFacility, setPostFacility] = useState({
        commonFacility:{}
    });

    //객실 내 시설
    const stringRoom = ["roomSpa", "minibar", "wifi", "bathSupplies", "tv", "airConditioner", "refrigerator", "roomShower", "bathTub", "drier", "iron", "riceCooker"];
    const [postRoomFacility, setPostRoomFacility] = useState({
        roomFacility:{}
    });

    //공용시설 선택
    const chgFacility = (e) => {
        if (!postFacility.commonFacility[stringPublic[Number(e.target.id.split("_")[1])]]) {
            let title = stringPublic[Number(e.target.id.split("_")[1])];
            console.log(title);
            setPostFacility((prevState) => ({
                // ...prevState,
                commonFacility: {
                    ...prevState.commonFacility,
                    [title]: true
                }
            })
            )
        } else {
            delete postFacility.commonFacility[stringPublic[Number(e.target.id.split("_")[1])]];
        }
    }

    //객실 내 시설 선택
    const chnRoomFacility = (e) => {
        if (!postRoomFacility.roomFacility[stringRoom[Number(e.target.id.split("_")[1])]]) {

            let title2 = stringRoom[Number(e.target.id.split("_")[1])];
            setPostRoomFacility((prevState) => ({
                roomFacility: {
                    ...prevState.roomFacility,
                    [title2]: true
                }
            }))
        } else {
            delete postRoomFacility.roomFacility[stringRoom[Number(e.target.id.split("_")[1])]];
        }
    }

    let postList = [];
    const postdata = { "commonFacility": postFacility.commonFacility };
    const postdata2 = { "roomFacility": postRoomFacility.roomFacility };
    async function postInfo(e) {
        try {
            console.log(postdata, postdata2);
            const response = await axios
            .post("http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/hotel?skip=0&take=10", 
            
            {   "search": "서울",
                "commonFacility": postdata.commonFacility,
                "roomFacility": postdata2.roomFacility
            }

            , { "Content-Type": 'application/json' });
            for (var i = 0; i < response.data.length; i++) {
                postList.push(response.data[i]);
            }
            navigate('/product/search/2', {
                state: {
                    postList: postList
                }
            })
            console.log(response);
        }
        catch(err) {
            console.log(err);
        }
    }
    return (
        <div className={styles.filtermenu_box}>
            <section>
                <h3>날짜</h3>
                <Calender />
            </section>
            <section className={styles.detail_section}>
                    <h3>상세조건</h3>
                <div className={styles.btn_box}>
                    <button className={`${styles.detail_btn_style} ${styles.reset_btn}`}>초기화</button>
                    <button
                        className={`${styles.detail_btn_style} ${styles.apply_btn}`}
                        onClick={postInfo}
                    >적용</button>
                </div>
            </section>
            <section className={styles.specil_label}>
                <ul>
                    <li>
                        <input type="checkbox" id="reserve_0"></input>
                        <label htmlFor="reserve_0">예약 가능</label>
                    </li>
                    <li>
                        <input type="checkbox" id="promotion_1"></input>
                        <label htmlFor="promotion_1">프로모션</label>
                    </li>
                </ul>
            </section>
            <section className={styles.specil_label}>
            <strong>호텔·리조트 유형</strong>
                <ul>
                <li>
                        <input type="checkbox" id="grade_0"></input>
                        <label htmlFor="grade_0">5성급</label>
                </li>
                <li>
                        <input type="checkbox" id="grade_1"></input>
                        <label htmlFor="grade_1">특1급</label>
                </li>
                <li>
                        <input type="checkbox" id="grade_2"></input>
                        <label htmlFor="grade_2">특급</label>
                </li>
                </ul>
            </section>


            <section>
                <div className={styles.people_box}>
                    <p>인원</p>
                    <div className={styles.people_btn_box}>
                        <img alt="minus_btn" src={minus_btn} onClick={() => countPeople > 2 && setCountPeople(prev => prev - 1)} />
                        <span>{countPeople}</span>
                        <img alt="plus_btn" src={plus_btn} onClick={() => countPeople < 10 && setCountPeople(prev => prev + 1)} />
                    </div>
                </div>
            </section>
            <section>
                <strong>배드타입</strong>
                <div className={styles.bedtype_box}>
                    <input type="checkbox" id="bed_type_S"></input>
                    <label htmlFor="bed_type_S"></label>
                    <input type="checkbox" id="bed_type_D"></input>
                    <label htmlFor="bed_type_D"></label>
                    <input type="checkbox" id="bed_type_T"></input>
                    <label htmlFor="bed_type_T"></label>
                    <input type="checkbox" id="bed_type_0"></input>
                    <label htmlFor="bed_type_0"></label>
                </div>
            </section>
            <section>
                <strong>공용시설</strong>
                <ul className={styles.filter_checkbox}>
                    {publicFaci.map((ele, idx) => { return <li key={idx}><input type="checkbox" id={`public_${idx}`} onClick={chgFacility} /><label htmlFor={`public_${idx}`}>{ele}</label></li>})}
                </ul>
            </section>
            <section>
                <strong>객실 내 시설</strong>
                <ul className={styles.filter_checkbox}>
                    {inRoomFaci.map((ele, idx) => {return <li key={idx}><input type="checkbox" id={`inroom_${idx}`} onClick={chnRoomFacility} /><label htmlFor={`inroom_${idx}`}>{ele}</label></li>})}
                </ul>
            </section>
            <section>
                <strong>기타</strong>
                <ul className={styles.filter_checkbox}>
                {accFaci.map((ele, idx) => {return <li key={idx}><input type="checkbox" id={`acc_${idx}`} /><label htmlFor={`acc_${idx}`}>{ele}</label></li>})}
                </ul>
            </section>
        </div>
    )
}

export default FilterMenu