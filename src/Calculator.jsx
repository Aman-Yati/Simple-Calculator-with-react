import {useState} from "react";
import './Calculator.css';


const Calculator = () => {
    const [inputValue, setInputValue] = useState('');
    const clear = () => setInputValue('');
    const display = (value) => setInputValue(inputValue + value);
    const calculate = () => { 
      try{ setInputValue(String(eval(inputValue))) }
      catch{ setInputValue('Error') }
    };

  return (
    <form className="Calculator" name="calc" onSubmit={(e)=>e.preventDefault()}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <div className="keys">
        <span className="key clear" onClick={() => clear()}>C</span>
        <span className="key operator" onClick={() => display('/')}>/</span>
        <span className="key operator" onClick={() => display('*')}>*</span>
        <span className="key" onClick={() => display('7')}>7</span>
        <span className="key" onClick={() => display('8')}>8</span>
        <span className="key" onClick={() => display('9')}>9</span>
        <span className="key operator" onClick={() => display('-')}>-</span>
        <span className="key" onClick={() => display('4')}>4</span>
        <span className="key" onClick={() => display('5')}>5</span>
        <span className="key" onClick={() => display('6')}>6</span>
        <span className="key operator plus" onClick={() => display('+')}>+</span>
        <span className="key" onClick={() => display('1')}>1</span>
        <span className="key" onClick={() => display('2')}>2</span>
        <span className="key" onClick={() => display('3')}>3</span>
        <span className="key zero" onClick={() => display('0')}>0</span>
        <span className="key" onClick={() => display('00')}>00</span>
        <span className="key" onClick={() => display('.')}>.</span>
        <span className="key equal" onClick={() => calculate()}>=</span>
      </div>
    </form>
  )
}

export default Calculator