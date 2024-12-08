

export default function Buttons ({ updateDisplay, evaluate, handleDecimal, handleOperator, square, squareRoot, percentage, clear }) {
    return (
        <div id="buttons-div">
            <div className="rows">
                <button id="clear" onClick={clear} className="btn btn-dark rounded-0">AC</button>
                <button id="square" onClick={square} className="btn btn-dark rounded-0">x²</button>
                <button id="square-root" onClick={squareRoot} className="btn btn-dark rounded-0">√x</button>
                <button id="percentage"  onClick={percentage} className="btn btn-dark rounded-0">%</button>
            </div>
            <div className="rows">
                <button id="seven" value="7" onClick={updateDisplay} className="btn btn-dark rounded-0">7</button>
                <button id="eight" value="8" onClick={updateDisplay} className="btn btn-dark rounded-0">8</button>
                <button id="nine" value="9" onClick={updateDisplay} className="btn btn-dark rounded-0">9</button>
                <button id="divide" value="/" onClick={handleOperator} className="btn btn-dark rounded-0 operator">÷</button>
            </div>
            <div className="rows">
                <button id="four" value="4" onClick={updateDisplay} className="btn btn-dark rounded-0">4</button>
                <button id="five" value="5" onClick={updateDisplay} className="btn btn-dark rounded-0">5</button>
                <button id="six" value="6" onClick={updateDisplay} className="btn btn-dark rounded-0">9</button>
                <button id="multiply" value="*" onClick={handleOperator} className="btn btn-dark rounded-0 operator">×</button>
            </div>
            <div className="rows">
                <button id="one" value="1" onClick={updateDisplay} className="btn btn-dark rounded-0">1</button>
                <button id="two" value="2" onClick={updateDisplay} className="btn btn-dark rounded-0">2</button>
                <button id="three" value="3" onClick={updateDisplay} className="btn btn-dark rounded-0">3</button>
                <button id="subtract" value="-" onClick={handleOperator} className="btn btn-dark rounded-0 operator">−</button>
            </div>
            <div className="rows">
                <button id="zero" value="0" onClick={updateDisplay} className="btn btn-dark rounded-0">0</button>
                <button id="decimal" value="." onClick={handleDecimal} className="btn btn-dark rounded-0">.</button>
                <button id="equals" onClick={evaluate} className="btn btn-light rounded-0">=</button>
                <button id="add" value="+" onClick={handleOperator} className="btn btn-dark rounded-0 operator">+</button>
            </div>
        </div>
    )
}