import { useState } from "react";
import styles from "../Styles/HotelInfo.module.css"

// const { kakao } = window;

function HotelInfo({data}) {
    const [infoClick, setInfoClick] = useState(true);
    const [faciClick, setFaciClick] = useState(false);
    const [managerClick, setManagerClick] = useState(false);


    const sectionClick = (name) => {
        [setFaciClick, setInfoClick, setManagerClick].filter(ele => name !== ele).forEach(ele => ele(false))
        name(prev => !prev)
    }

        // useEffect(() => {
        //     const container = document.getElementById("map");
        //     const options = {
        //         center : new kakao.maps.LatLng(33.450701,126.570667),
        //         // center : new kakao.maps.LatLng(33.450701,126.570667),
        //         level : 3,
        //     };
        //     const map = new kakao.maps.Map(container, options);
        // }, [])


    return (
        <article className={styles.info_wrap}>
            <button onClick={() => sectionClick(setInfoClick)}>기본정보</button>
            <section style={infoClick ? null : {"display" : "none"}}>
                {data?.accommodationInfos.accommodationInfoList.map(ele => 
                <div key={ele.displayOrder}>
                    <h3>{ele.attribute}</h3>
                    <ul>
                        {ele.accommodationInfoValueList.map((element) => <li style={{
                            "fontWeight" : element.bold ? "bold" : null,
                            "color" : element.color === "black" ? null : `${element.color}`
                        }} key={`${element.displayOrder}`}>{element.content}</li>)}
                    </ul>
                </div>)}
                {/* <div id="map" className={styles.map}></div> */}
            </section>
            <button onClick={() => sectionClick(setFaciClick)}>편의시설 및 서비스</button>
            <section style={faciClick ? null : {"display" : "none"}}>
                <ul className={styles.facilities}>
                    {data?.facilities.map((ele, idx) => <li key={idx}>{ele}</li>)}
                </ul>
            </section>
            <button onClick={() => sectionClick(setManagerClick)}>판매자정보</button>
            <section style={managerClick ? null : {"display" : "none"}}>
                <ul>
                    {data?.sellerInfo.phoneNumber === "" ? null : <><h3>대표자명</h3><ul><li>{data?.sellerInfo.phoneNumber}</li></ul></>}
                    {data?.sellerInfo.address === "" ? null : <><h3>주소</h3><ul><li>{data?.sellerInfo.address}</li></ul></>}
                    {data?.sellerInfo.name === "" ? null : <><h3>전화번호</h3><ul><li>{data?.sellerInfo.name}</li></ul></>}
                    {data?.sellerInfo.manageNumber === "" ? null : <><h3>사업자번호</h3><ul><li>{data?.sellerInfo.manageNumber}</li></ul></>}
                </ul>
            </section>
        </article>
    )
}

export default HotelInfo