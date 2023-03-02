import { useState } from "react";

function Calender({a, seta}) {


    const [selectMonth, setSelectMonth] = useState(0);
    const [selectDate, setSelectDate] = useState([]);
    const day = ["일", "월", '화', '수', "목", "금", "토",];

    function getNewDateObj(newDate) {
        const year = newDate.getFullYear();
        const month = newDate.getMonth() + 1;
        const date = newDate.getDate();
        const day = newDate.getDay();
      
        return { year, month, date, day};
      }

    function getMonthDate(newDate, page) {
    const doMonth = getNewDateObj(
        new Date(newDate.year, newDate.month - 1 + page, 1)
    );

    const prevMonthLastDate = getNewDateObj(
        new Date(doMonth.year, doMonth.month - 1, 0)
    );

    const startDate =
        prevMonthLastDate.day === 0
        ? prevMonthLastDate
        : prevMonthLastDate.day === 6
        ? doMonth
        : getNewDateObj(
            new Date(doMonth.year, doMonth.month - 1, -prevMonthLastDate.day)
            );
    let monthDate = [];
    for (let i = 0; i < 42; i++) {
        monthDate.push(
        getNewDateObj(
            new Date(startDate.year, startDate.month - 1, startDate.date + i)
        )
        );
    }

    const week1 = monthDate.slice(0, 7);
    const week2 = monthDate.slice(7, 14);
    const week3 = monthDate.slice(14, 21);
    const week4 = monthDate.slice(21, 28);
    const week5 = monthDate.slice(28, 35);
    const week6 = monthDate.slice(35);

    const week4LastDate = week4[week4.length - 1];
    const week5LastDate = week5[week5.length - 1];
    const lastDate = new Date(doMonth.year, doMonth.month, 0);
    const isLastWeek4 =
        week4LastDate.month !== doMonth.month ||
        !(week4LastDate.date < lastDate.getDate());
    const isLastWeek5 =
        week5LastDate.month !== doMonth.month ||
        !(week5LastDate.date < lastDate.getDate());
    const dateArr = [week1, week2, week3, week4];

    return {
        year: doMonth.year,
        month: doMonth.month,
        date: isLastWeek4
        ? dateArr
        : isLastWeek5
        ? [...dateArr, week5]
        : [...dateArr, week5, week6],
    };
    }

    function drawWeek(week) {
        return getMonthDate(getNewDateObj(new Date()), selectMonth).date[week]
    }

// 12월이 지날 경우 1, 2월을 보여주게 합니다. (3월은 나올 수 없음 최대 2개월 뒤까지 볼 수 있음)
    function drawMonth(){
        if(getMonthDate(getNewDateObj(new Date()), 0).month + selectMonth === 13){
            return 1
        } else if (getMonthDate(getNewDateObj(new Date()), 0).month + selectMonth === 14){
            return 2
        } else {
            return getMonthDate(getNewDateObj(new Date()), 0).month + selectMonth
        }
    }

    function pickDate(month, date){
        if(selectDate.length >= 2) {
            let Msec = selectDate[1].getTime() - selectDate[0].getTime();
            // 몇 박인지 알려주는 변수
            let Mday = Msec/1000/60/60/24;
            setSelectDate([]);
            setSelectDate(prevList => [...prevList, new Date(getNewDateObj(new Date()).year, month - 1, date)]);
        }
        setSelectDate(prevList => [...prevList, new Date(getNewDateObj(new Date()).year, month - 1, date)]);
    }

    return(
        // 드래그 금지... 넣어야함
        <div>
            <div>
                <span onClick={() => selectMonth > 0 && setSelectMonth(prev => prev - 1)}>prev</span>
                {/* 넘겼을때 월의 값이 13이 넘을 시 1년을 더해줌 */}
                <span>{getMonthDate(getNewDateObj(new Date()), 0).month + selectMonth > 13 ? getMonthDate(getNewDateObj(new Date()), 0).year + 1 : getMonthDate(getNewDateObj(new Date()), 0).year}년</span>
                <span>{drawMonth()}월</span>
                <span onClick={() => selectMonth < 2 && setSelectMonth(prev => prev + 1)}>next</span>
            </div>
            <table>
                <thead>
                    <tr>
                        {day.map((ele, idx) => {return <th key={idx}>{ele}</th>})}
                    </tr>
                </thead>
                <tbody onClick={e => pickDate(drawMonth(), Number(e.target.textContent))}>
                    <tr>{drawWeek(0) && drawWeek(0).map((ele) => <td key={`day_${ele.date}`}>{ele.date <= 7 ? ele.date : null}</td>)}</tr>
                    <tr>{drawWeek(1) && drawWeek(1).map((ele) => <td key={`day_${ele.date}`}>{ele.date}</td>)}</tr>
                    <tr>{drawWeek(2) && drawWeek(2).map((ele) => <td key={`day_${ele.date}`}>{ele.date}</td>)}</tr>
                    <tr>{drawWeek(3) && drawWeek(3).map((ele) => <td key={`day_${ele.date}`}>{ele.date}</td>)}</tr>
                    <tr>{drawWeek(4) && drawWeek(4).map((ele) => <td key={`day_${ele.date}`}>{ele.date >= 21 ? ele.date : null}</td>)}</tr>
                    <tr>{drawWeek(5) && drawWeek(5).map((ele) => <td key={`day_${ele.date}`}>{ele.date >= 21 ? ele.date : null}</td>)}</tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calender