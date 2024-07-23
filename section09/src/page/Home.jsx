import { useState, useContext } from "react"
import { DiarySateContext } from "../App";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";

const getMonthlyData = (pivotDate, data) => {

  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();

  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime(); // 마지막 날짜 일 구하는 팁 다음 월에 다음 일자를 0으로 반환 하면 전월에 마지막 일을 준다. 

  return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime)
}

const Home = () => {
  const data = useContext(DiarySateContext);

  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);
  console.log(monthlyData);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1} 월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      ></Header>
      <DiaryList data={monthlyData} />
    </div >
  )
}

export default Home;