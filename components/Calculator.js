"use client"; 
import { useState } from 'react';

export default function Calculator() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };


  const handleClear = () => {
    setExpression('');
  };

  const handleCalculate = () => {
    try {
      if (expression === '') return;
      const result = eval(expression); 
      setExpression(String(result));
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center">
              <h5 className="mb-0">Calculator</h5>
            </div>
            <div className="card-body">
              
              {/* Display Field */}
              <div className="mb-3">
                <input
                  type="text"
                  id="display"
                  className="form-control form-control-lg text-end"
                  value={expression || '0'}
                  readOnly
                  style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                />
              </div>

              {/* Calculator Buttons Grid */}
              <div className="d-grid gap-2">
                
                {/* Row 1 */}
                <div className="row g-2">
                  <div className="col-3"><button id="btn-7" className="btn btn-light w-100 p-3 shadow-sm" onClick={() => handleClick('7')}>7</button></div>
                  <div className="col-3"><button id="btn-8" className="btn btn-light w-100 p-3 shadow-sm" onClick={() => handleClick('8')}>8</button></div>
                  <div className="col-3"><button id="btn-9" className="btn btn-light w-100 p-3 shadow-sm" onClick={() => handleClick('9')}>9</button></div>
                  <div className="col-3"><button id="btn-div" className="btn btn-secondary w-100 p-3 shadow-sm" onClick={() => handleClick('/')}>/</button></div>
                </div>

                {/* Row 2 */}
                <div className="row g-2">
                  <div className="col-3"><button id="btn-4" className="btn btn-light w-100 p-3 shadow-sm" onClick={() => handleClick('4')}>4</button></div>
                  <div className="col-3"><button id="btn-5" className="btn btn-light w-100 p-3 shadow-sm" onClick={() => handleClick('5')}>5</button></div>
                  <div className="col-3"><button id="btn-6" className="btn btn-light w-100 p-3 shadow-sm" onClick={() => handleClick('6')}>6</button></div>
                  <div className="col-3"><button id="btn-mul" className="btn btn-secondary w-100 p-3 shadow-sm" onClick={() => handleClick('*')}>*</button></div>
                </div>

                {/* Row 3 */}
                <div className="row g-2">
                  <div className="col-3"><button id="btn-1" className="btn btn-light w-100 p-3 shadow-sm" onClick={() => handleClick('1')}>1</button></div>
                  <div className="col-3"><button id="btn-2" className="btn btn-light w-100 p-3 shadow-sm" onClick={() => handleClick('2')}>2</button></div>
                  <div className="col-3"><button id="btn-3" className="btn btn-light w-100 p-3 shadow-sm" onClick={() => handleClick('3')}>3</button></div>
                  <div className="col-3"><button id="btn-sub" className="btn btn-secondary w-100 p-3 shadow-sm" onClick={() => handleClick('-')}>-</button></div>
                </div>

                {/* Row 4 */}
                <div className="row g-2">
                  <div className="col-3"><button id="btn-0" className="btn btn-light w-100 p-3 shadow-sm" onClick={() => handleClick('0')}>0</button></div>
                  <div className="col-3"><button id="btn-clear" className="btn btn-danger w-100 p-3 shadow-sm" onClick={handleClear}>C</button></div>
                  <div className="col-3"><button id="btn-eq" className="btn btn-success w-100 p-3 shadow-sm" onClick={handleCalculate}>=</button></div>
                  <div className="col-3"><button id="btn-add" className="btn btn-secondary w-100 p-3 shadow-sm" onClick={() => handleClick('+')}>+</button></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}