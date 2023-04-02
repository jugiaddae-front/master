import Star from "./Star"
import styles from "../Styles/Modal.module.css"
import { useState } from "react"
// import axios from "axios";

function Modal({isPostClick}) {
    const [currentValue, setCurrentValue] = useState(0);
    // const [selectedFile, setSelectedFile] = useState(null);

    function getPoint(value) {
        setCurrentValue(+value);
    }

        function starArr(num) {
        let arr = [];
        if(num%2 === 0){
            for(let i=1; i<=num/2; i++) {
                arr.push(14)
            }
            for(let i=1; i<=5-num/2; i++) {
                arr.push(0)
            }
        } else {
            for(let i=1; i<=Math.floor(num/2); i++) {
                arr.push(14)
            }
            arr.push(7);
            for(let i=1; i<=5-Math.ceil(num/2); i++) {
                arr.push(0)
            }
        }
        return arr
    }

    // const onImgChange = (e) => {
    //     const { files } = e.target;
    //     setSelectedFile(files[0]);
    // }

    // const uploadImages = async () => {
    //     if (selectedFile) {
    //       const formData = new FormData();
    //       formData.append('image', selectedFile);
    //       console.log(formData);
    //       try {
    //         const response = await axios.post(
    //           'http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/review/image',
    //           formData,
    //           {
    //             headers: { 'Content-Type': 'multipart/form-data' },
    //           }
    //         );
    //         console.log(response);
    //         alert('사진을 post 했습니다.');
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     } else {
    //       alert('이미지를 선택해주세요.');
    //     }
    //   };

    return (
        <>
        <div onClick={() => isPostClick(false)} className={styles.modal_background}>
        </div>
            <div className={styles.modal_wrap}>
                <h2>리뷰 작성</h2>
                <p>제목</p>
                <input className={styles.title} type="text"/>
                <p>내용</p>
                <textarea className={styles.contents} />
                <input type="range" min="0" max="10" step="0.1" value={currentValue} onChange={(e) => getPoint(e.target.value)} />

                {/* <input type="file" accept="image/*" onChange={(e) => onImgChange(e)} />
                <button onClick={uploadImages}>업로드</button> */}

                <div>
                    {starArr(currentValue).map((ele, idx) => <Star fill={ele} id={`modal${idx}`} />)}
                </div>
                    <strong className={styles.currentValue}>{currentValue}</strong>
                <div className={styles.btn_wrap}>
                    <button className={styles.confirm_btn}>확인</button>
                    <button onClick={() => isPostClick(false)} className={styles.cancel_btn}>취소</button>
                </div>
        </div>
        </>
    )
}

export default Modal