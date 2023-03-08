import styles from '../Pages/Home.module.css';
function LocationPage({ imgUrl, pageName }) {
  return (
    <div className={styles.main_link}>
              <ul>
                <li>
                  <a href='/product/search/1'>
                    <span className={styles.motel_img}></span>
                    <p>모텔</p>
                  </a>
                </li>

                <li>
                  <a href='/product/search/2'>
                    <span className={styles.hotel_img}></span>
                    <p>호텔 리조트</p>
                  </a>
                </li>

                <li>
                  <a href='/product/search/3'>
                    <span className={styles.pension_img}></span>
                    <p>펜션</p>
                  </a>
                </li>

                <li>
                  <a href='/product/search/4'>
                    <span className={styles.guest_img}></span>
                    <p>게스트하우스</p>
                  </a>
                </li>

                <li>
                  <a href='/product/search/5'>
                    <span className={styles.camping_img}></span>
                    <p>캠핑 글램핑</p>
                  </a>
                </li>
                
                <li>
                  <a href='/product/search/6'>
                    <span className={styles.overseas_img}></span>
                    <p>해외 여행</p>
                  </a>
                </li>

              </ul>
            </div>

  );
}

export default LocationPage;