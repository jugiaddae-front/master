import { useState, useEffect } from "react"
import Calender from "../Components/Calender";
import Header from "../Components/Header"
import SearchProduct from "../Components/SearchProduct";
import Slider from "../Components/Slider"
import { useSearchParams } from "react-router-dom";
import styles from "../Styles/SearchResult.module.css"

function SearchResult() {
    const HOUSETYPE = ["모텔", "호텔·리조트", "한옥", "펜션", "게스트하우스", "캠핑"];
    const [clickDate, setClickDate] = useState(false);
    const [searchData, setSearchData] = useState();
    const [sliderMinData, setSliderMinData] = useState(1);
    const [sliderMaxData, setSliderMaxData] = useState(30);
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    useEffect(() => {
        fetch('http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/hotel?skip=0&take=10', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "search": `${keyword}`,
            })
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            setSearchData(data);
        });
    }, []);

    const paintPrice = () => {
        if(sliderMaxData === 30) {
            return `${sliderMinData}만원 이상`
        } else {
            return `${sliderMinData}만원~${sliderMaxData}만원`
        }
    }

    return(
    <>
        <Header />
        <div className={styles.top_wrap}>
            <span className={styles.keyword}>'{keyword}'</span>
        </div>
        <div className={styles.main_wrap}>
            <div>
                <div className={styles.filter_wrap}>
                <section>
                    <h3>날짜</h3>
                    <div onClick={() => setClickDate(prev => !prev)} className={styles.date_btn}><span>오늘~내일 1박</span></div>
                    {clickDate ? <Calender /> : null}
                </section>
                <section>
                    <h3>상세조건</h3>
                    <div className={styles.filter_btn_wrap}>
                        <button>초기화</button>
                        <button>적용</button>
                    </div>
                </section>
                <section>
                    <strong>숙소 유형</strong>
                    <ul className={styles.housetype_list}>
                        {HOUSETYPE.map((ele, idx) => <li key={idx}><input type="checkbox" id={`type${idx}`}/><label htmlFor={`type${idx}`}>{ele}</label></li>)}
                    </ul>
                </section>
                <section>
                    <strong>가격
                    <span className={styles.span_price}>{paintPrice()}</span>
                    </strong>
                    <Slider getMinData={setSliderMinData} getMaxData={setSliderMaxData} />
                </section>
                </div>
            </div>
            <div className={styles.list_wrap}>
                <div className={styles.btn_box}>
                    <div className={styles.top_btn_wrap}>
                        <button>거리 순</button>
                        <button>가격 순</button>
                    </div>
                    <button className={styles.map_btn}>지도</button>
                </div>
                <ul>
                    {searchData && searchData.map((ele, idx) => <li key={`product_list_${idx}`}><SearchProduct name={ele.name} img={ele.hotelImage.mainUrl} address={ele.address} /></li>)}
                </ul>
            </div>
        </div>
    </>
    )
}

export default SearchResult