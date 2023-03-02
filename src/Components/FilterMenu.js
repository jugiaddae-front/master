import { useState } from "react"
import Calender from "./Calender";

function FilterMenu() {
    
    const [countPeople, setCountPeople] = useState(2);
    const [clickDate, setClickDate] = useState(false);
    const [a, seta] = useState([]);
    const publicFaci = ["피트니스", "수영장", "사우나", "골프장", "레스토랑", "엘레베이터", "라운지", "공용PC", "BBQ", "카페", "공용스파", "족구장", "세미나실", "편의점", "노래방", "주방/식당", "세탁기", "건조기", "탈수기", "주차장", "취사가능", "공용샤워실", "온천", "스키장"];
    const inRoomFaci = ["객실스파", "미니바", "와이파이", "욕실용품", "TV", "에어컨", "냉장고", "객실샤워실", "욕조", "드라이기", "다리미", "전기밥솥"];
    const accFaci = ["반려견동반", "조식포함", "객실내흡연", "발렛파킹", "금연", "객실내취사", "프린터사용", "짐보관가능", "개인사물함", "무료주차", "픽업가능", "캠프파이어", "카드결제", "장애인편의시설"];

    return (
        <div>
            <strong>날짜</strong>
            <div onClick={() => setClickDate(prev => !prev)}><span>날짜1~날짜2, 몇박</span></div>
            {clickDate ? <Calender a={a} seta={seta} /> : null}
            <div>
                <strong>상세조건</strong>
                <button>초기화</button>
                <button>적용</button>
            </div>
            <section>
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
            <strong>호텔·리조트 유형</strong>
            <section>
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
                <strong>인원</strong>
                <div>
                    <button onClick={() => countPeople > 2 && setCountPeople(prev => prev - 1)}>-</button>
                    <span>{countPeople}</span>
                    <button onClick={() => countPeople < 10 && setCountPeople(prev => prev + 1)}>+</button>
                </div>
            </section>
            <section>
                <input type="checkbox" id="bed_type_S"></input>
                <label htmlFor="bed_type_S"></label>
                <input type="checkbox" id="bed_type_D"></input>
                <label htmlFor="bed_type_D"></label>
                <input type="checkbox" id="bed_type_T"></input>
                <label htmlFor="bed_type_T"></label>
                <input type="checkbox" id="bed_type_0"></input>
                <label htmlFor="bed_type_0"></label>
            </section>
            <section>
                <strong>공용시설</strong>
                <ul>
                    {publicFaci.map((ele, idx) => {return <li key={idx}><input type="checkbox" id={`public_${idx}`} /><label htmlFor={`public_${idx}`}>{ele}</label></li>})}
                </ul>
            </section>
            <section>
                <strong>객실 내 시설</strong>
                <ul>
                    {inRoomFaci.map((ele, idx) => {return <li key={idx}><input type="checkbox" id={`inroom_${idx}`} /><label htmlFor={`inroom_${idx}`}>{ele}</label></li>})}
                </ul>
            </section>
            <section>
                <strong>기타</strong>
                <ul>
                {accFaci.map((ele, idx) => {return <li key={idx}><input type="checkbox" id={`acc_${idx}`} /><label htmlFor={`acc_${idx}`}>{ele}</label></li>})}
                </ul>
            </section>
        </div>
    )
}

export default FilterMenu