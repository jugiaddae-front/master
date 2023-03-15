import { useState } from "react"
import styles from "../Styles/Slider.module.css"

function Slider({ getMinData , getMaxData }) {
    const [rangeMinValue, setRangeMinValue] = useState(1);
    const [rangeMaxValue, setRangeMaxValue] = useState(30);

    const rangeMinLimit = (e) => {
        let minValue = +e.target.value;
        if(Number(rangeMaxValue) - minValue < 2) {
          minValue = +rangeMaxValue - 2;
        }
        setRangeMinValue(minValue);
        getMinData(minValue);
      }
      
      const rangeMaxLimit = (e) => {
        let maxValue = +e.target.value;
        if(maxValue - Number(rangeMinValue) < 2) {
          maxValue = +rangeMinValue + 2;
        }
        setRangeMaxValue(maxValue);
        getMaxData(maxValue);
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