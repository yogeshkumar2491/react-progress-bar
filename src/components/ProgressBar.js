import "../App.css";

const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="progress-bar mx-[35%] mt-[20%]">
      <div
        className="progress-bar-fill"
        style={{ transform: `translateX(${progress - 100}%)` }}
      />
    </div>
  );
};

export default ProgressBar;
