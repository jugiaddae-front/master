import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Header from '../Components/Header';

import styles from "../Styles/DetailPage.module.css";

function DetailPage() {
  const location = useLocation();
  console.log(location.state);

  axios.get(`http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/hotel/${location.state.id}`)
    .then((response) => {
      console.log(response);
    }).catch((err) => console.log(err));
  
  axios.get(`http://ec2-13-209-62-189.ap-northeast-2.compute.amazonaws.com:8080/api/review/${location.state.id}`)
    .then((response) => {
      console.log(response);
    }).catch((err) => console.log(err));
// for (var i = 0; i < response.data.length; i++) {
//   searchData.push(response.data[i]);
// }

  return (
    <>
      <Header />
      <img src={location.state.imgUrl}></img>
      <h2>{location.state.maintext}</h2>
      <p>{location.state.score}</p>
      <div>{location.state.location}</div>
    </>
  );
}
export default DetailPage;