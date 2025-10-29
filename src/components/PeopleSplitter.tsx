import React from 'react';

interface PeopleSplitterProps {
  value: string;
  onChange: (value: string) => void;
  error: string;
}

const PeopleSplitter: React.FC<PeopleSplitterProps> = ({ value, onChange, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^\d+$/.test(val)) {
      onChange(val);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-base font-bold text-dark-grayish-cyan">
          Number of People
        </label>
        {error && <p className="text-base font-bold text-red-500">{error}</p>}
      </div>
      <div className="relative">
        <img src="https://i.ibb.co/YyVvj0D/icon-person.png" alt="person icon" className="input-icon" />
        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={handleChange}
          placeholder="0"
          className={`input-field ${error ? 'border-red-500 focus:border-red-500' : 'border-transparent'}`}
          aria-label="Number of People"
        />
      </div>
    </div>
  );
};

export default PeopleSplitter;
