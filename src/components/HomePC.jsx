import React, { useState } from 'react';
import styles from './HomePC.module.css';
import { useMediaQuery } from 'react-responsive';


const HomePC = () => {
  const [searchOn, setSearchOn] = useState(false);

  const [searchContent, setSearchContent] = useState('')


  return (
    <>
        <div className={styles.main_wrapper}>
          <header className={styles.header_wrapper}>
            <section className={styles.header_section}>
              <h1 className={styles.title}>저기어때</h1>
            <button
              type='button'
              className={styles.header_search}
              style={searchOn ? {right: '797px'} : {right: '396px'}}
              onClick={() => setSearchOn(true)}
            >검색</button>

              <ul className={styles.list} style={searchOn ? {display: 'none'} : {display: 'block'}}>
                <li className={styles.list1}>로그인</li>
                <li className={styles.list2}>더보기</li>
                <li className={styles.list3}>예약내역</li>
                <li className={styles.list4}>내주변</li>
            </ul>
            
            <div className={styles.search_bar} style={searchOn ? {display: 'block'} : {display: 'none'}}>
              <div className={styles.search_main}>
                <input
                  type='text'
                  placeholder='지역, 숙소명'
                  value={searchContent}
                  onChange={searchContent}
                />
                <button style={{display: 'none'}}></button>
              </div>
              <button
                className={styles.search_cancel}
                type='button'
                onClick={() => {setSearchOn(false)}}
              >X</button>
            </div>
            </section>
          </header>

          <div className={styles.content}>
            <div className={styles.mainAd_Wrapper}>
              
            </div>

            <div className={styles.main_link}>
              <ul>
                <li>
                  <a href='/product/search/1'>
                    <span>사진</span>
                    <p>모텔</p>
                  </a>
                </li>

                <li>
                  <a href='/product/search/2'>
                    <span>사진</span>
                    <p>호텔 리조트</p>
                  </a>
                </li>

                <li>
                  <a href='/product/search/3'>
                    <span>사진</span>
                    <p>펜션</p>
                  </a>
                </li>

                <li>
                  <a href='/product/search/4'>
                    <span>사진</span>
                    <p>게스트하우스</p>
                  </a>
                </li>

                <li>
                  <a href='/product/search/5'>
                    <span>사진</span>
                    <p>캠핑 글램핑</p>
                  </a>
                </li>

                <li>
                  <a href='/product/search/6'>
                    <span>사진</span>
                    <p>해외 여행</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
}

export default HomePC;