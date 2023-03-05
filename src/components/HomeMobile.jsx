import React, {useState} from 'react';
import styles from './HomeMobile.module.css';
import { useMediaQuery } from 'react-responsive';


const HomeMobile = () => {
  // const isMoblie = useMediaQuery({
  //   query: "(max-width:1024px)"
  // });

  const [menuOn, setMenuOn] = useState(false);
  const [searchOn, setSearchOn] = useState(false);

  return (
    <div>

        <div className={styles.main_wrapper}>
          <header className={styles.header_wrapper}>
            <section className={styles.header_section}>
              <h1 className={styles.title}>저기어때.</h1>
              <button type='button' className={styles.header_menu} onClick={(e) => {setMenuOn(true)}}>메뉴</button>
              <button type='button' className={styles.header_search} onClick={(e) => setSearchOn(true)}>검색</button>

              <div className={styles.msearch_bar} style={searchOn ? {display: 'block'} : {display: 'none'}}>
                <div className={styles.msearch_main}>
                  <input type='text' placeholder='지역, 숙소명' />
                  <button type='button' className={styles.mbtn_search}></button>
                </div>
                <button type='button' onClick={() => setSearchOn(false)}>취소</button>
              </div>
            </section>
          </header>

          {menuOn &&
            <>
          <div className={styles.menuBar}>
            <button type='button' className={styles.menuBar_close} onClick={(e) => {setMenuOn(false)}}>X</button>
          </div>

          <div className={styles.menu_wrap}>
            <div className={styles.menu}>
                <div className={styles.menu_top}>

                  <a><span>로그인</span></a>
              </div>
              <div className={styles.menu_nav}>
                <div className={styles.menu_navMain}>
                  <ul>
                    <li>홈</li>    
                    <li className={styles.menu_cate}>숙소유형</li> 
                    <li>내주변</li> 
                  </ul>
                  <ul>
                    <li>예약 내역</li>
                  </ul>
                    <ul>
                      <li>더보기</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
            </>
        }

          <div className={styles.content}>
            <div className={styles.mainAd_wrpper}></div>

            <div className={styles.main_nav}>
              <ul>
                <li>
                  <a>
                    <span>사진</span>
                    <p>모텔</p>
                  </a>
                </li>

                <li>
                  <a>
                    <span>사진</span>
                    <p>호텔 리조트</p>
                  </a>
                </li>

                <li>
                  <a>
                    <span>사진</span>
                    <p>펜션</p>
                  </a>
                </li>

                <li>
                  <a>
                    <span>사진</span>
                    <p>게스트하우스</p>
                  </a>
                </li>

                <li>
                  <a>
                    <span>사진</span>
                    <p>캠핑 글램핑</p>
                  </a>
                </li>
                
                <li>
                  <a>
                    <span>사진</span>
                    <p>해외 여행</p>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default HomeMobile;