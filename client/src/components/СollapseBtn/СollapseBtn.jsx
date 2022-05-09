import "./СollapseBtn.css";

const СollapseBtn = (props) => {
  const { isChatShow, setIsChatShow } = props;

  return (
    <div className="collapse-btn">
      <button
        
        onClick={() => setIsChatShow(!isChatShow)}
        type="button"
        class="btn btn-primary"
      >
        {isChatShow ? "Свернуть" : "Развернуть"}
      </button>
    </div>
  );
};

export default СollapseBtn;
