import ChartText from "../ChartText";
import "./style.css";

const DayChart = ({ pespective, dayList: { convesation, date } }) => {
  return (
    <div>
      <div className="date-container">
        <div className="date">{date}</div>
      </div>
      {convesation.map((typer, index) => {
        return (
          <ChartText
            isIcon={
              !(index > 0 && convesation[index - 1].typer === typer.typer)
            }
            typerName={typer.typer}
            isFromPespective={pespective === typer.typer}
            text={typer.text}
            time={typer.time}
          />
        );
      })}
    </div>
  );
};

export default DayChart;
