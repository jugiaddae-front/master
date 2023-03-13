import { useState } from "react"
import styles from "../Styles/Slider.module.css"

function Slider({ getMinData , getMaxData }) {
    const [rangeMinValue, setRangeMinValue] = useState(1);
    const [rangeMaxValue, setRangeMaxValue] = useState(30);
    
    const rangeMinLimit = (e) => {
        if(Number(rangeMaxValue) - Number(e.target.value) < 2) {
            setRangeMinValue(+rangeMaxValue - 2);
        } else (
            setRangeMinValue(+e.target.value)
            )
            getMinData(rangeMinValue);
    }

    const rangeMaxLimit = (e) => {
        if(Number(e.target.value) - Number(rangeMinValue) < 2) {
            setRangeMaxValue(+rangeMinValue + 2);
        } else (
            setRangeMaxValue(+e.target.value)
            )
            getMaxData(rangeMaxValue);
    }

    return (
    <div className={styles.slide_wrap}>
        <div className={styles.slide}>
            <div className={styles.slide_inner}>
                <div className={styles.range_wrap}>
                    <input value={rangeMinValue} min="1" max="30" step="1" type="range" onChange={(e) => rangeMinLimit(e)} />
                    <input value={rangeMaxValue} min="1" max="30" step="1" type="range" onChange={(e) => rangeMaxLimit(e)} />
                </div>
            </div>
        </div>
        <div className={styles.price_text_wrap}>
        <span>1만원</span>
        <span>30만원</span>
        </div>
    </div>
    )
}

export default Slider