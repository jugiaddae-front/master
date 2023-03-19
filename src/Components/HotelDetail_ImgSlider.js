import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../Styles/ImgSlider.module.css"


function ImgSlider() {
    const [getDetailImg, setGetDetailImg] = useState();
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        axios.get('http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/hotel/7')
        .then(res => setGetDetailImg(res.data.detailImageUrl))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className={styles.slider_wrap}>
            <div className={styles.big_img}>
                {getDetailImg && <img alt="big_img" src={getDetailImg[currentIdx]} />}
            </div>

            <div className={styles.swiper_wrap}>
                <p onClick={() => setCurrentIdx(prev => prev-1)}>&lt;</p>
                <ul>
                    {getDetailImg && getDetailImg.map((ele, idx) => <li key={`img${idx}`}><img alt={`detail_img${idx}`} src={`${ele}`} /></li>)}
                </ul>
                <p onClick={() => setCurrentIdx(prev => prev+1)}>&gt;</p>
            </div>
        </div>
    )
}

export default ImgSlider