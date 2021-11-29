import React/*, {useState}*/ from "react";
import Wrapper from "./components/Wrapper";
import DrumBox from "./components/DrumBox";
import DisplayBox from "./components/DisplayBox";
import Buttons from "./components/Buttons";
import PowerSwitch from "./components/PowerSwitch";
import Screen from "./components/Screen";
import SoundButton from "./components/SoundButton";

const buttonsValue = [
  ["Q", "W", "E"],
  ["A", "S", "D"],
  ["Z", "X", "C"]
];
const urlValue = [
  [
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  ],
  [
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  ],
  [
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  ]
];
const nameValue = [
  ["Heater-1", "Heater-2", "Heater-3"],
  ["Heater-4_1", "Heater-6", "Dsc_oh"],
  ["Kick_n_Hat", "RP4_Kick_1", "Cev_H2"]
];

const App = () => {
  
  
  const playQ = () => {};
  const playW = () => {};
  const playE = () => {};
  const playA = () => {};
  const playS = () => {};
  const playD = () => {};
  const playZ = () => {};
  const playX = () => {};
  const playC = () => {};

  return (
    <Wrapper>
      <DrumBox>
      {buttonsValue.flat().map((btn, i)=>{
        return (
          <Buttons
            key={i}
            eleId={
              btn === "Q" ? "d1" :
              btn === "W" ? "d2" :
              btn === "E" ? "d3" :
              btn === "A" ? "d4" :
              btn === "S" ? "d5" :
              btn === "D" ? "d6" :
              btn === "Z" ? "d7" :
              btn === "X" ? "d8" :
              "d9"
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
              playC()
            }
            value={
              btn === "Q" ? "Q" :
              btn === "W" ? "W" :
              btn === "E" ? "E" :
              btn === "A" ? "A" :
              btn === "S" ? "S" :
              btn === "D" ? "D" :
              btn === "Z" ? "Z" :
              btn === "X" ? "X" :
              "C"
            }
            audId={
              btn === "Q" ? "Q" :
              btn === "W" ? "W" :
              btn === "E" ? "E" :
              btn === "A" ? "A" :
              btn === "S" ? "S" :
              btn === "D" ? "D" :
              btn === "Z" ? "Z" :
              btn === "X" ? "X" :
              "C"
            }
            url={
              btn === "Q" ? urlValue[0][1] :
              btn === "W" ? urlValue[0][2] :
              btn === "E" ? urlValue[0][3] :
              btn === "A" ? urlValue[1][1] :
              btn === "S" ? urlValue[1][2] :
              btn === "D" ? urlValue[1][3] :
              btn === "Z" ? urlValue[2][1] :
              btn === "X" ? urlValue[2][2] :
              urlValue[2][3]
            }
            value2={
              btn === "Q" ? nameValue[0][1] :
              btn === "W" ? nameValue[0][2] :
              btn === "E" ? nameValue[0][3] :
              btn === "A" ? nameValue[1][1] :
              btn === "S" ? nameValue[1][2] :
              btn === "D" ? nameValue[1][3] :
              btn === "Z" ? nameValue[2][1] :
              btn === "X" ? nameValue[2][2] :
              nameValue[2][3]
            }
          />
        );
      })}
      </DrumBox>
      <DisplayBox>
        <PowerSwitch />
        <Screen value3="" />
        <SoundButton />
      </DisplayBox>
    </Wrapper>
  );
}

export default App;
