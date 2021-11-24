import Wrapper from "./components/Wrapper";
import KeysBox from "./components/KeysBox";
import DisplayBox from "./components/DisplayBox";
import Buttons from "./components/Buttons";

const buttonsValue = [
  ["Q", "W", "E"],
  ["A", "S", "D"],
  ["Z", "X", "C"]
];

function App() {
  return (
    <Wrapper>
      <KeysBox>
        {buttonsValue.flat().map((btn, i)=>{
          return (
            <Buttons
              eleId={
                btn === "Q" ? d1 :
                btn === "W" ? d2 :
                btn === "E" ? d3 :
                btn === "A" ? d4 :
                btn === "S" ? d5 :
                btn === "D" ? d6 :
                btn === "Z" ? d7 :
                btn === "X" ? d8 :
                btn === "C" ? d9 : false
              }
              onClick={
                btn === "Q" ? playQ() :
                btn === "W" ? playW() :
                btn === "E" ? playE() :
                btn === "A" ? playA() :
                btn === "S" ? playS() :
                btn === "D" ? playD() :
                btn === "Z" ? playZ() :
                btn === "X" ? playX() :
                btn === "C" ? playC() : false
              }
          );
        })}
      </KeysBox>
      <DisplayBox/>
    </Wrapper>
  );
}

export default App;
