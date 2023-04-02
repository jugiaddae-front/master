import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../Styles/Join.module.css';

function Join() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [chkPw, setChkPw] = useState('');
  const [name, setName] = useState('');


  const [idOk, setIdOk] = useState(false);
  const [pwOk, setPwOk] = useState(false);
  const [isSame, setIsSame] = useState(false)

  const [btnDis, setBtnDis] = useState(true);
  
  //아이디 정규식 맞는지 확인
  useEffect(() => {
    //영문자로 시작하는 영문자 또는 숫자 6~20자 
    const regExpId = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (regExpId.test(id)) {
      setIdOk(true);
    } else if (!regExpId.test(id)) {
      setIdOk(false);
    }
  }, [id])

  useEffect(() => {
    //8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
    const regExpPw = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (regExpPw.test(pw)) {
      setPwOk(true);
    } else if (!regExpPw.test(pw)) {
      setPwOk(false);
    }
  }, [pw])

  useEffect(() => {
    if (pw === chkPw) {
      setIsSame(true);
    } else {
      setIsSame(false);
    }
  }, [pw, chkPw])

  useEffect(() => {
    if (idOk === true && pwOk === true && isSame === true&& name !== '') {
      setBtnDis(false)
    }
  }, [idOk, pwOk, isSame, name]);

  async function join(e) {
    try {
      if (btnDis === true) {
        alert('정보를 다시 확인해주세요.')
        return;
      }

      const response = await axios
        .post(
          'http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/sign-api/sign-up',
          {
            "id": id,
            "password": pw,
            "name": name,
            "role": "admin"
          },
          {
            "Content-Type": "application/json"
          });
      console.log(response);
      if (response.success === true) {
        alert('회원가입 완료되었습니다.')
      } 
    }
    catch(err) {
      console.log(err);
      if (err.response.status === 400) {
        alert('이미 존재하는 회원 정보입니다.')
      }
    }
  }

  return (
    <>
      <div className={styles.join_mainWrapper}>
        <section className={styles.join_section}>
          <div className={styles.join_logo} onClick={(e) => {navigate('/')}}>저기어때.</div>
          <h4>회원가입</h4>
              <div className={styles.join_form}>
              <div>
                <p>아이디</p>
                <input name='id' type='text' value={id} onChange={(e) => setId(e.target.value)} />
                <div className={idOk ? styles.join_idErrHide : styles.join_idErr}>
                  영문자로 시작하는 영문자 또는 숫자 6~20자여야 합니다.
                </div>
              </div>

              <div>
                <p>비밀번호</p>
                <input name = 'password' type='password' value={pw} onChange={(e) => setPw(e.target.value)} />
                <div className={pwOk ? styles.join_pwErrHide : styles.join_pwErr}>
                  8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 포함되어야 합니다.
                </div>
              </div>

              <div>
                <p>비밀번호 확인</p>
                <input type='password' value={chkPw} onChange={(e) => setChkPw(e.target.value)} />
                <div className={isSame ? styles.join_sameErrHide : styles.join_saveErr}>
                  비밀번호가 일치하지 않습니다.
                </div>
              </div>

              <div>
                <p>이름</p>
                <input name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              </div>

          <button
            className={btnDis ? styles.join_btn : styles.join_activeBtn}
            type='button'
            onClick={join}
            disabled={btnDis ? true : false}
          >가입하기</button>
        </section>
      </div>
    </>
  );
}

export default Join;