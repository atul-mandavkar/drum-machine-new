import "./Buttons.css";




const Buttons = ({eleId, onClick, value, audId, url, value2}) => {
  return (
    <div className="buttons" id={eleId} onClick={onClick}>
      {value}
      <audio className="clip" id={audId} src={url}>
        {value2}
      </audio>
    </div>
  );
}





export default Buttons;