import "./style.css";
import data from "./data/data.json";
import { useEffect, useState } from "react";
import DayChart from "./components/DayChart"


export default function App() {
  const [chartList, setChatList] = useState([]);
  const [pespective, setPespective] = useState("");
  useEffect(() => {
    setChatList(data[0].friends[0].chartList);
    setPespective(data[0].userName);
  }, []);
  return (
    <div className="App">
      {chartList.map((day, index) => {
        return <DayChart key={index} dayList={day} pespective={pespective} />;
      })}
    </div>
  );
}
