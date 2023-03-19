import styles from "../Styles/SearchProduct.module.css"

function SearchProduct({ img, address, name }) {
    return (
        <div className={styles.product_wrap}>
            <div>
                <img src={img} alt="남해 맨하탄 호텔"></img>
            </div>
            <div className={styles.summary_wrap}>
                <div className={styles.name_wrap}>
                    <strong>{name}</strong>
                    <p className={styles.score}>
                        <span>
                            <em>8.9</em>
                            만족해요
                        </span>
                        (6,000)
                    </p>
                    <p>{address}</p>
                </div>
                <div className={styles.price_wrap}>
                    <p>대실 <b>30,000원</b></p>
                    <p>숙박 <b>60,000원</b></p>
                </div>
            </div>
        </div>
    )
}

export default SearchProduct