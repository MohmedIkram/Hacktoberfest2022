import {useState} from 'react';

function App() {

  //calculator function
  const[calc, setCalc] = useState("");
  const[result, setResult] = useState("");

  const options = ["/", "*", "+", "-"];

  const updateCalculation = value =>{
    if(options.includes(value) && calc === "" || options.includes(value) && options.includes(calc.slice(-1)))
    {
      return ;
    }
    setCalc(calc + value);

    if(!options.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }

//button adding
  const addDigits = () => {
    const digits = [];

    for(let j=1 ;j < 10;j++){
      digits.push(
        <button onClick={() => updateCalculation(j.toString())} key={ j }> { j }</button>
      )
    }
    return digits;
  }

  const equation = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if(calc == ""){
      return ;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }



  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
         { result ? <span>({result})</span> : ""} &nbsp; {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalculation('/')}>/</button>
          <button onClick={() => updateCalculation('*')}>*</button>
          <button onClick={() => updateCalculation('+')}>+</button>
          <button onClick={() => updateCalculation('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          
          { addDigits() }

          <button onClick={() => updateCalculation('0')}>0</button>
          <button onClick={() => updateCalculation('.')}>.</button>
          <button onClick={equation}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
