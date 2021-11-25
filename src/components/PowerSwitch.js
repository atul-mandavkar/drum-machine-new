import "./PowerSwitch.css";




const PowerSwitch = () => {
  return (
    <div className="container">
      <h3>power button </h3>
      <label className="switch">
      <input type="checkbox"></input>
      <span className="slider round"></span>
    </label>
    </div>
  );
};




export default PowerSwitch;