import React, { useState, useRef } from 'react';
import "./index.css";
import { Button } from '@mui/material';

const OTPInput = ({ length = 6, onSubmit }) => {
  const [otp, setOtp] = useState(Array(length).fill("")); // store each digit
  const inputsRef = useRef([]);

  // handle change
  const handleChange = (value, index) => {
    if (isNaN(value)) return; // accept only numbers

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // keep last digit only
    setOtp(newOtp);

    // move to next input automatically
    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  // handle key events (like backspace)
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // handle paste entire OTP
  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").slice(0, length);
    if (!/^\d+$/.test(pasted)) return;
    const newOtp = pasted.split("");
    setOtp(newOtp);
    newOtp.forEach((_, i) => {
      if (inputsRef.current[i]) inputsRef.current[i].value = newOtp[i];
    });
  };

  // join all digits into single string
  const handleSubmit = () => {
    const otpValue = otp.join("");
    onSubmit(otpValue);
  };

  return (
    <div className="otp-container">
      <div className="otp-inputs" onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="otp-box"
          />
        ))}
      </div>
      <Button onClick={handleSubmit} className="submit-btn btn-org">Verify OTP</Button>
    </div>
  );
};

export default OTPInput;
