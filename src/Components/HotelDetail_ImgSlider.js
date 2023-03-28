import { useEffect, useState } from "react";
import styles from "../Styles/ImgSlider.module.css"


function ImgSlider({data}) {
    const [currentIdx, setCurrentIdx] = useState();
    const [transitionSpeed, setTransitionSpeed] = useState(150)

    useEffect(() => {
        setCurrentIdx(data?.detailImageUrl.length)
    }, [data])

    const idxChanger = () => {
        if(currentIdx === 1) {
            setTimeout(() => {
                setCurrentIdx(data?.detailImageUrl.length);
                setTransitionSpeed(0);
            }, 150)
        }
        if(currentIdx === data?.detailImageUrl.length * 2) {
            setTimeout(() => {
                setCurrentIdx(data?.detailImageUrl.length + 1);
                setTransitionSpeed(0);
            }, 150)
        }
        setTransitionSpeed(150);
    }

    return (
        <div className={styles.slider_wrap}>
            <div className={styles.big_img}>
                {<img alt="big_img" src={data?.detailImageUrl[currentIdx%data?.detailImageUrl.length]} />}
            </div>
            <div style={{"display" : "flex", "alignItems":"center"}}>
                <p onClick={() => {setCurrentIdx(prev => prev-1); idxChanger()}}>&lt;</p>
                <div className={styles.swiper_wrap}>
                    <ul style={{"transform": `translateX(${-currentIdx * 115}px)`, "transition" : `${transitionSpeed}ms`}}>
                        {data?.detailImageUrl.map((ele, idx) => <li key={`img${idx}`}><img alt={`detail_img${idx}`} src={`${ele}`} /></li>)}
                        {data?.detailImageUrl.map((ele, idx) => <li key={`img${idx}`}><img alt={`detail_img${idx}`} src={`${ele}`} /></li>)}
                        {data?.detailImageUrl.map((ele, idx) => <li key={`img${idx}`}><img alt={`detail_img${idx}`} src={`${ele}`} /></li>)}
                    </ul>
                </div>
                <p onClick={() => {setCurrentIdx(prev => prev+1); idxChanger()}}>&gt;</p>
            </div>
        </div>
    )
}

export default ImgSlider