import { useState } from "react"

function BigLocationList({ getLocationData }) {
    const locationList =
        {
            "서울": ["강남/역삼/삼성/신사/청담", "서초/교대", "잠실/송파/왕십리/강동", "을지로/시청/명동", "종로/인사동/동대문/강북", "서울역/이태원/용산", "마포/홍대/신촌/서대문", "영등포/여의도/김포공항", "구로/금천/관악/동작"],
            "부산": ["해운대 (센텀,송정,달맞이)", "광안리", "부산역/남포/자갈치", "서면/동래/연제/남구" ,"기장/김해공항/기타(그외 지역)" ,"영도/송도해수욕장"],
            "제주": ["제주시/제주국제공항", "애월/협재/한림", "조천/함덕/김녕", "서귀포시", "중문", "성산/표선"],
            "강원": ["강릉/동해/삼척", "속초/고성", "양양/홍천/인제/철원", "평창/정선/횡성", "춘천/원주/영월/태백"],
            "경기": ["수원/성남/판교", "가평/양평/포천", "용인/평택/여주/이천", "화성/동탄/안산/부천/안양", "고양/의정부", "시흥/군포/광명", "남양주시/구리/하남"],
            "인천": ["송도/남동구/옹진군", "인천국제공항(중구)", "부평/계양/서구/미추홀구/강화"],
            "경상": ["경주", "거제/고성", "포항/청송/영덕/울진", "통영/창녕", "대구/구미/문경/안동", "창원/양산/김해/울산", "사천/남해/진주/하동"],
            "전라": ["여수", "전주", "광주", "순천/광양", "군산/익산/부안/진안/무주", "화순/남원/구례", "목포/나주/완도/해남/영암"],
            "충청": ["대전", "천안/아산/예산/당진", "보령(대천)/태안(안면도)/서산/부여", "충주/제천/단양", "청주/세종"],
        }

    const [locationMouse, setLocationMouse] = useState(locationList.서울);
    const [bigcity, setBigcity] = useState("서울")

    const locationMouseOver = (target) => {
        setLocationMouse(locationList[target]);
        setBigcity(target)
    }

    const locationMouseClick = (CurrentTarget, e) => {
        getLocationData(`${bigcity} > ${CurrentTarget}`);
    }

    return (
        // 여기 css는 테스트용 입니다. 나중에 지우겠습니다.
        <div style={{display : "flex"}}>
        <menu onMouseOver={e => locationMouseOver(e.target.textContent)}>
            <li>서울</li>
            <li>부산</li>
            <li>제주</li>
            <li>강원</li>
            <li>경기</li>
            <li>인천</li>
            <li>경상</li>
            <li>전라</li>
            <li>충청</li>
        </menu>
        <menu>
            {locationMouse && locationMouse.map((location, idx) => {return <li key={idx} onClick={e => locationMouseClick(e.target.textContent, e.target)}>{location}</li>})}
        </menu>
        </div>
    )
}

export default BigLocationList