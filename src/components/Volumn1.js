import "./Volumn1.css";




const Volumn1 = () => {
  return (
    <div className="container3">
      <h3>Volumn</h3>
      <input type="range" min="1" max="10" defaultValue="5" className="slider2 s2" />
      <div className="ans"></div>
    </div>
  );
};




export default Volumn1;