import "./PowerSwitch.css";




const PowerSwitch = () => {
  return (
    <div className="container">
      <h3>power button </h3>
      <label className="switch">
      <input type="checkbox" id="chBox" defaultChecked="true"/>
      <span className="slider round"></span>
    </label>
    </div>
  );
};




export default PowerSwitch;