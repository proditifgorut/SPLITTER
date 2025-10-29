import React from 'react';

interface ResultsDisplayProps {
  tipPerPerson: number;
  totalPerPerson: number;
  onReset: () => void;
  canReset: boolean;
}

const ResultRow: React.FC<{ label: string; amount: number }> = ({ label, amount }) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="text-white font-bold text-base">{label}</p>
      <p className="text-grayish-cyan font-bold text-sm">/ person</p>
    </div>
    <p className="text-strong-cyan font-bold text-3xl sm:text-5xl tracking-tighter">
      ${amount.toFixed(2)}
    </p>
  </div>
);

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  tipPerPerson,
  totalPerPerson,
  onReset,
  canReset,
}) => {
  return (
    <div className="bg-dark-cyan rounded-2xl p-6 sm:p-10 flex flex-col justify-between">
      <div className="space-y-6 sm:space-y-10">
        <ResultRow label="Tip Amount" amount={tipPerPerson} />
        <ResultRow label="Total" amount={totalPerPerson} />
      </div>
      <button
        onClick={onReset}
        disabled={!canReset}
        className="w-full mt-8 py-3 bg-strong-cyan text-dark-cyan text-xl font-bold rounded-md transition-colors duration-200 hover:bg-light-grayish-cyan disabled:bg-strong-cyan/20 disabled:cursor-not-allowed"
      >
        RESET
      </button>
    </div>
  );
};

export default ResultsDisplay;
