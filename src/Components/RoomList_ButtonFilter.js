import styles from "../Styles/ButtonFilter.module.css"
import map from "../img/map.png"


function ButtonFilter() {
    return(
    <div className={styles.button_filter_box}>
        <div className={styles.four_filter_btn}>
            <button>추천 순</button>
            <button>거리 순</button>
            <button>낮은 가격 순</button>
            <button>높은 가격 순</button>
        </div>
        <div className={styles.map_btn}>
            <img alt="map" src={map}></img>
            <p>지도</p>
        </div>
    </div>
    )
}

export default ButtonFilter