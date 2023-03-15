import { useEffect, useState } from "react";
import styles from "../Styles/Header.module.css"
import { Link } from 'react-router-dom';

function Header() {
    const [accMenuHidden, setAccMenuHidden] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        window.scrollY >= 1 ? setScroll(true) : setScroll(false);
    };

    return (
        <div className={`${scroll ? styles.scrolled_top_box : null} ${styles.top_box}`}>
            <h1><Link to="/">저기어때.</Link></h1>
            <nav>
            <ul className={styles.nav_box}>
                <li>내주변</li>
                <li>예약내용</li>
                <li onMouseEnter={() => setAccMenuHidden(true)} onMouseLeave={() => setAccMenuHidden(false)}>더보기
                    <ul className={`${accMenuHidden ? styles.acc_menu_apear : styles.acc_menu_hidden}`}>
                        <li>공지사항</li>
                        <li>이벤트</li>
                        <li>자주 묻는 질문</li>
                        <li>1:1 문의</li>
                        <li>약관 및 정책</li>
                    </ul>
                </li>
                <li>로그인</li>
            </ul>
        </nav>
    </div>
    )
}

export default Header