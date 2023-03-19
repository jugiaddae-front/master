import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../Styles/HotelInfo.module.css"

function HotelInfo() {
    const [apiData, setApiData] = useState();

    useEffect(() => {
        axios.get('http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/hotel/7')
        .then(res => setApiData(res.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <article className={styles.info_wrap}>
            <button>기본정보</button>
            <section>
                {apiData?.accommodationInfos.accommodationInfoList.map(ele => 
                <div key={ele.displayOrder}>
                    <h3>{ele.attribute}</h3>
                    <ul>
                        {ele.accommodationInfoValueList.map((element) => <li style={{
                            "fontWeight" : element.bold ? "bold" : null,
                            "color" : element.color === "black" ? null : `${element.color}`
                        }} key={`${element.displayOrder}`}>{element.content}</li>)}
                    </ul>
                </div>)}
            </section>
            <button>요금정보</button>
            {/* <section></section> */}
            <button>테마</button>
            {/* <section></section> */}
            <button>판매자정보</button>
            {/* <section></section> */}
        </article>
    )
}

export default HotelInfo