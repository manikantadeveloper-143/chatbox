const UserIcon = ({ letter, isFromPespective }) => {
    return (
      <div
        className="icon"
        style={{
          backgroundColor: isFromPespective
            ? "rgb(49,247,181)"
            : "rgb(252,76,123)"
        }}
      >
        <p>{letter}</p>
      </div>
    );
  };
  
  export default UserIcon;



  