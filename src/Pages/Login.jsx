import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Styles/Login.module.css'
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  async function Login(e) {
    try {
      console.log(id, pw);
      const response = await axios
        .post(
          'http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/sign-api/sign-in',
          {
            "id": id,
            "password": pw
          },
          {
            "Content-Type": "application/json"
          });
      console.log(response);
      if (response.status == 200) {
        alert('로그인되었습니다.')
        window.localStorage.setItem("token", response.data.token);
        navigate('/');
      } else if (response.status == 400) {
        alert('회원 정보가 맞지 않습니다.');
      }
    }
    catch(err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className={styles.login_mainWrapper}>
        <section className={styles.login_section}>
          <div className={styles.login_id}>
            <input className={styles.login_idInput} value={id} onChange={(e) => setId(e.target.value)} placeholder='아이디' type='text' required/>
          </div>

          <div className={styles.login_pw}>
            <input value={pw} onChange={(e) => setPw(e.target.value)} placeholder='비밀번호' type='password' required/>
          </div>

          <button onClick={Login} className={styles.login_btn}>로그인</button>

          <div className={styles.login_linkHalf}>
            <div className={styles.login_rePw}>비밀번호 재설정</div>
            <div className={styles.login_join}><Link to='/user/join'>회원가입</Link></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;