import './App.css';
import { OTP } from './components/OTP/index'
import { useState } from 'react';

function App() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  let len = otp.length;

  function handleChange(element, index) {
    setOtp([...otp.map((v, i) => (i === index) ? element.value : v)]);

    if (element.nextSibling) {
      console.log("hast");
      element.nextSibling.focus();
    } else {
      handleFinish();
    }

  }
  function handleFinish(element) {
    console.log("hello");
    if (element.previousSibling) {
      element.previousSibling.focus();
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4 text-center">
            <div className="row">
              <div className="col-sm-12 mt-5 bgWhite">
                <div className="title">
                  Verify OTP
                </div>
                <form className="mt-5">
                  {
                    otp.map((value, index) => {
                      return <input key={index} className='border mx-1' onChange={(e) => handleChange(e.target, index)} onFocus={e => e.target.select()} />
                    })
                  }                </form>
                <hr className="mt-4" />
                <button className='btn btn-primary btn-block mt-4 mb-4 customBtn'>Verify</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

