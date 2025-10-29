import React, { useState } from 'react';

interface TipSelectorProps {
  tipPercent: number | '';
  onSelect: (value: number | '') => void;
}

const TipSelector: React.FC<TipSelectorProps> = ({ tipPercent, onSelect }) => {
  const tipOptions = [5, 10, 15, 25, 50];
  const [customValue, setCustomValue] = useState('');

  const handleTipClick = (tip: number) => {
    onSelect(tip);
    setCustomValue('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomValue(value);
      onSelect(value === '' ? '' : parseInt(value));
    }
  };

  return (
    <div className="space-y-4">
      <label className="text-base font-bold text-dark-grayish-cyan">
        Select Tip %
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {tipOptions.map((tip) => (
          <button
            key={tip}
            onClick={() => handleTipClick(tip)}
            className={`py-2 text-2xl font-bold rounded-md transition-colors duration-200 ${
              tipPercent === tip
                ? 'bg-strong-cyan text-dark-cyan'
                : 'bg-dark-cyan text-white hover:bg-light-grayish-cyan hover:text-dark-cyan'
            }`}
          >
            {tip}%
          </button>
        ))}
        <input
          type="text"
          inputMode="numeric"
          value={customValue}
          onChange={handleCustomChange}
          placeholder="Custom"
          className="input-field text-center placeholder:text-center placeholder:text-dark-grayish-cyan"
          aria-label="Custom Tip Percentage"
        />
      </div>
    </div>
  );
};

export default TipSelector;
