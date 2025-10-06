import React, { useState } from 'react';
import { Button } from '@mui/material';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const QtyBox = () => {
  const [qty, setQty] = useState(1);

  const increase = () => setQty(prev => prev + 1);
  const decrease = () => setQty(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center gap-3">
      {/* Label */}
      <label className="text-[14px] font-medium text-gray-600">
        Quantity:
      </label>

      {/* Input + Buttons */}
      <div className="relative flex items-center w-[120px] border-2 border-[#a1a1a1] rounded-md">
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
          className="w-full h-[45px] p-2 text-[15px] focus:outline-none rounded-md"
        />

        {/* Up/Down buttons */}
        <div className="absolute right-0 top-0 flex flex-col h-full">
          <Button
            onClick={increase}
            className="!w-[30px] !min-w-[30px] !h-[22px] !text-black !p-0"
          >
            <FaAngleUp />
          </Button>
          <Button
            onClick={decrease}
            className="!w-[30px] !min-w-[30px] !h-[22px] !text-black !p-0"
          >
            <FaAngleDown />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QtyBox;
