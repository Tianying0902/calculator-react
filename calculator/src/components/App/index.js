import React, { useEffect, useState } from "react";
import Button from "../Button";
import formatter from "../../utils/formatter";
import menu from "../../assets/menu.png";
import "./App.css";
const App = () => {
  const [time, setTime] = useState(new Date());
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  useEffect(() => {
    setTime(new Date());
  }, [new Date().getMinutes()]);
  // here is a question: what is this =>()=>{}
  const handleButtonPress = (content) => () => {
    const num = parseFloat(value);
    if (content === "AC") {
      setValue("0");
      setMemory(null);
      return;
    }
    if (content === "±") {
      setValue((num * -1).toString());
      return; //prevent to implement the next step
    }
    if (content === "%") {
      setValue((num / 100).toString());
      return;
    }
    if (content === ".") {
      // have decimal or not
      if (value.includes(".")) return;
      setValue(value + ".");
      return;
    }
    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(parseFloat(memory + num));
        }
        if (operator === "-") {
          setMemory(parseFloat(memory - num));
        }
        if (operator === "x") {
          setMemory(parseFloat(memory * num));
        }
        if (operator === "÷") {
          setMemory(parseFloat(memory / num));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setOperator("+");
      setValue("0");
      return;
    }
    if (content === "-") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(parseFloat(memory + num));
        }
        if (operator === "-") {
          setMemory(parseFloat(memory - num));
        }
        if (operator === "x") {
          setMemory(parseFloat(memory * num));
        }
        if (operator === "÷") {
          setMemory(parseFloat(memory / num));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setOperator("-");
      setValue("0");
      return;
    }
    if (content === "x") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(parseFloat(memory + num));
        }
        if (operator === "-") {
          setMemory(parseFloat(memory - num));
        }
        if (operator === "x") {
          setMemory(parseFloat(memory * num));
        }
        if (operator === "÷") {
          setMemory(parseFloat(memory / num));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setOperator("x");
      setValue("0");
      return;
    }
    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(parseFloat(memory + num));
        }
        if (operator === "-") {
          setMemory(parseFloat(memory - num));
        }
        if (operator === "x") {
          setMemory(parseFloat(memory * num));
        }
        if (operator === "÷") {
          setMemory(parseFloat(memory / num));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setOperator("÷");
      setValue("0");
      return;
    }
    if (content === "=") {
      if (!operator) return;
      if (operator === "+") {
        setValue((memory + num).toString());
      }
      if (operator === "-") {
        setValue((memory - num).toString());
      }
      if (operator === "x") {
        setValue((memory * num).toString());
      }
      if (operator === "÷") {
        setValue((memory / num).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }
    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };
  return (
    <div className="App">
      <div className="top">
        {time.getHours()}:{time.getMinutes()}
        <div className="menu">
          <img src={menu} alt="menu"></img>
        </div>
      </div>
      <div className="display">{formatter(value)}</div>
      <div className="buttons">
        <Button
          onButtonClick={handleButtonPress}
          content="AC"
          type="function"
        />
        <Button onButtonClick={handleButtonPress} content="±" type="function" />
        <Button onButtonClick={handleButtonPress} content="%" type="function" />
        <Button onButtonClick={handleButtonPress} content="÷" type="operator" />

        <Button onButtonClick={handleButtonPress} content="7" />
        <Button onButtonClick={handleButtonPress} content="8" />
        <Button onButtonClick={handleButtonPress} content="9" />
        <Button onButtonClick={handleButtonPress} content="x" type="operator" />

        <Button onButtonClick={handleButtonPress} content="6" />
        <Button onButtonClick={handleButtonPress} content="5" />
        <Button onButtonClick={handleButtonPress} content="4" />
        <Button onButtonClick={handleButtonPress} content="-" type="operator" />

        <Button onButtonClick={handleButtonPress} content="3" />
        <Button onButtonClick={handleButtonPress} content="2" />
        <Button onButtonClick={handleButtonPress} content="1" />
        <Button onButtonClick={handleButtonPress} content="+" type="operator" />

        <Button onButtonClick={handleButtonPress} content="0" />
        <Button onButtonClick={handleButtonPress} content="." />
        <Button onButtonClick={handleButtonPress} content="=" type="operator" />
      </div>
      <div className="bottom">-</div>
    </div>
  );
};

export default App;
