import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from '../Pages/Home.module.css';
function Header() {

  const [searchOn, setSearchOn] = useState(false);
  const [searchContent, setSearchContent] = useState('')

  const navigate = useNavigate();


  let postList = [];
  async function postInfo(e) {
    try {
      const response = await axios
        .post("http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/hotel?skip=10&take=10", {
          "search": JSON.stringify(searchContent)
        }, { "Content-Type": 'application/json' });
      for (var i = 0; i < response.data.length; i++) {
        postList.push(response.data[i]);
      }
      navigate('/searchregion', {
        state: {
          postList: postList,
          searchContent: searchContent
        }
      })
    }
    catch(err) {
      console.log(err);
    }
  }
  function cancelSearch(e) {
    setSearchOn(false);
    setSearchContent('');
  }

  const getSearch = (e) => {
    if (e.key == 'Enter') {
      postInfo();      
    }
  }

  return (
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
          <li className={styles.list1}>내주변</li>
          <li className={styles.list2}>예약내역</li>
          <li className={styles.list3}>더보기</li>
          <li className={styles.list4}>로그인</li>
      </ul>
      
      <div className={styles.search_bar} style={searchOn ? {display: 'block'} : {display: 'none'}}>
        <div className={styles.search_main}>
            <input
              className={styles.search_input}
            type='text'
            placeholder='지역, 숙소명'
            value={searchContent}
              onChange={(e) => { setSearchContent(e.target.value) }}
              onKeyDown={getSearch}
          />
            <button
              style={{ display: 'none' }}
            ></button>
        </div>
        <button
          className={styles.search_cancel}
          type='button'
          onClick={cancelSearch}
          >X</button>
          
          <div className={styles.reco_search}>
          </div>
      </div>
      </section>
    </header>
  );
}

export default Header;