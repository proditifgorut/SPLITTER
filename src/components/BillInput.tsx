import React from 'react';

interface BillInputProps {
  value: string;
  onChange: (value: string) => void;
}

const BillInput: React.FC<BillInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^\d*\.?\d{0,2}$/.test(val)) {
      onChange(val);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-base font-bold text-dark-grayish-cyan">
        Bill
      </label>
      <div className="relative">
        <img src="https://i.ibb.co/GvjJMy3/icon-dollar.png" alt="dollar icon" className="input-icon" />
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          placeholder="0"
          className="input-field"
          aria-label="Bill Amount"
        />
      </div>
    </div>
  );
};

export default BillInput;
