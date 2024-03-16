import UserIcon from "../UserIcon";
import "./style.css";

const ChartText = ({
  isFromPespective,
  isIcon,
  text,
  time,
  typerName = "User"
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: isFromPespective ? "end" : "start",
        flexDirection: isFromPespective ? "row-reverse" : null
      }}
    >
      {isIcon ? (
        <UserIcon
          letter={typerName.slice(0, 1)}
          isFromPespective={isFromPespective}
        />
      ) : (
        <div className="icon"></div>
      )}
      <div
        className="text-container"
        style={{
          backgroundColor: isFromPespective
            ? "rgb(207,219,255)"
            : "rgb(222,222,222)",
          borderRadius: isFromPespective
            ? "50px 0 50px 50px"
            : "0 50px 50px 50px"
        }}
      >
        <p className="text">{text}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  );
};

export default ChartText;
