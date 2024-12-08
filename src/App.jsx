import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
  const [state, setState] = useState(initialState);

  const updateDisplay = (e) => {
    if(state.formula.length >= 18) {
      return;
    }
    if(state.currValue[0] === "0" && e.target.value === "0") {
      setState(prevState => {
        return {
          ...prevState,
          currValue: state.currValue
        }
      })  
    }
    else {

      if(state.isEvaluated) {

        if(state.formula === "") {
        setState({
          output: e.target.value,
          currValue: e.target.value,
          formula: e.target.value,
          isEvaluated: false
        })
      }

      else {
        setState({
          output: e.target.value,
          currValue: e.target.value,
          formula: state.formula + e.target.value,
          isEvaluated: false
        })
      }
    }

      else {
        setState(prevState => {
          return {
            ...prevState,
            output: state.currValue + e.target.value,
            currValue: state.currValue + e.target.value,
            formula: state.formula + e.target.value
          }
        })
      }
    }

  };

  const evaluate = () => {
    if(state.formula === "") {
      return;
    }
    let result = eval(state.formula);
    setState((prevState => {
      return {
        ...prevState,
        formula: result.toString(),
        output: result.toString(),
        isEvaluated: true
      }
    }));
  }

  const clear = () => setState(initialState);

  const handleOperator = e => {
    let lastChar = findLastChar(state.formula);
    if(!operatorRegex.test(lastChar)) {
      setState(prevState => {
        return {
          ...prevState,
          formula: state.formula + e.target.value,
          currValue: ""
        }
      })
    }
    else {
      if (lastChar !== "-" && e.target.value === "-") {
        setState(prevState => {
          return {
            ...prevState,
            formula: state.formula + e.target.value
          }
        })
      }
      else if (lastChar === "-" && e.target.value !== "-") {
        setState(prevState => {
          return {
            ...prevState,
            formula: state.formula.slice(0, -2) + e.target.value,
            currValue: ""
          }
        })
      }
      else {
        setState(prevState => {
          return {
            ...prevState,
            formula: state.formula.slice(0, -1) + e.target.value
          }
        })
      }
    }

  }

  const handleDecimal = () => {
    let lastChar = findLastChar(state.formula);
    if(!state.currValue.includes(".") && state.isEvaluated === false && !operatorRegex.test(lastChar)) {
      setState(prevState => {
        return {
          ...prevState,
          currValue: state.currValue + ".",
          output: state.output + ".",
          formula: state.formula + "."
        }
      })
    }
  }

  const square = () => {
    let result = Math.pow(state.formula, 2);
    setState((prevState => {
      return {
        ...prevState,
        formula: result.toString(),
        output: result.toString(),
        isEvaluated: true
      }
    }));
  }

  const squareRoot = () => {
    let result = Math.sqrt(state.formula);
    setState((prevState => {
      return {
        ...prevState,
        formula: result.toString(),
        output: result.toString(),
        isEvaluated: true
      }
    }));
  }

  const percentage = () => {
    let result = state.formula / 100;
    setState((prevState => {
      return {
        ...prevState,
        formula: result.toString(),
        output: result.toString(),
        isEvaluated: true
      }
    }));
  }

  return (
    <>
    <div id="wrapper" className='bg-dark'>
      <div id="calculator">
      <Display state={state} />
      <Buttons updateDisplay={updateDisplay}
      evaluate={evaluate}
      handleDecimal={handleDecimal}
      handleOperator={handleOperator}
      square={square}
      squareRoot={squareRoot}
      percentage={percentage}
      clear={clear} />
      </div>
    </div>
    </>
  )
}

const initialState = {
  currValue: "",
  output: "0",
  formula: "",
  isEvaluated: false
};

const operatorRegex = /[+\-*\/]/;

const findLastChar = (value) => value[value.length - 1];

export default App
