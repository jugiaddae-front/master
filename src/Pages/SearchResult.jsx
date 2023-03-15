import axios from "axios";
import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom";
import Calender from "../Components/Calender";
import Header from "../Components/Header"
import SearchProduct from "../Components/SearchProduct";
import Slider from "../Components/Slider"
import styles from "../Styles/SearchResult.module.css"

function SearchResult() {
    const HOUSETYPE = ["모텔", "호텔·리조트", "한옥", "펜션", "게스트하우스", "캠핑"];
    const SEARCHSIZE = 10;
    const [clickDate, setClickDate] = useState(false);
    const [searchData, setSearchData] = useState([]);
    const [sliderMinData, setSliderMinData] = useState(1);
    const [sliderMaxData, setSliderMaxData] = useState(30);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    const target = useRef();

    useEffect(() => {
        const fetchData = async () => {
          try {
            setIsLoading(true);
            const response = await axios.post(`http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/hotel?skip=${page * SEARCHSIZE}&take=${SEARCHSIZE}`, {
              search: `${keyword}`,
            }, {
              headers: { 'Content-Type': 'application/json' }
            });
            // 데이터 중복 방지
            const newSearchData = response.data.filter(newData => {
                return !searchData.some(existingData => existingData.id === newData.id);
            });
            setSearchData(prev => [...prev, ...newSearchData]);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        };
        
        fetchData();
      }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && !isLoading) {
            setPage((prev) => prev + 1);
          }
        }, { threshold: 1 });
      
        observer.observe(target.current);
      
        return () => observer.disconnect();
      }, [isLoading]);


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
                    {searchData && searchData.map((ele, idx) => <li key={`product_list_${ele.id}`}><SearchProduct name={ele.name} img={ele.hotelImage.mainUrl} address={ele.address} /></li>)}
                </ul>
                <div className={styles.last_div} ref={target} />
            </div>
        </div>
    </>
    )
}

export default SearchResult