import React, { useState, useEffect } from 'react';
import BillInput from './BillInput';
import TipSelector from './TipSelector';
import PeopleSplitter from './PeopleSplitter';
import ResultsDisplay from './ResultsDisplay';

const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState<string>('');
  const [tipPercent, setTipPercent] = useState<number | ''>('');
  const [people, setPeople] = useState<string>('');
  const [peopleError, setPeopleError] = useState<string>('');

  const [tipPerPerson, setTipPerPerson] = useState<number>(0);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);

  const billNum = parseFloat(bill) || 0;
  const tipNum = typeof tipPercent === 'number' ? tipPercent : 0;
  const peopleNum = parseInt(people) || 0;

  useEffect(() => {
    if (billNum > 0 && tipNum >= 0 && peopleNum > 0) {
      const tipAmount = billNum * (tipNum / 100);
      const totalAmount = billNum + tipAmount;
      
      setTipPerPerson(tipAmount / peopleNum);
      setTotalPerPerson(totalAmount / peopleNum);
    } else {
      setTipPerPerson(0);
      setTotalPerPerson(0);
    }

    if (people !== '' && peopleNum === 0) {
      setPeopleError("Can't be zero");
    } else {
      setPeopleError('');
    }
  }, [bill, tipPercent, people, billNum, tipNum, peopleNum]);

  const handleReset = () => {
    setBill('');
    setTipPercent('');
    setPeople('');
    setPeopleError('');
    setTipPerPerson(0);
    setTotalPerPerson(0);
  };

  const canReset = billNum > 0 || tipNum > 0 || peopleNum > 0;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Input Section */}
      <div className="space-y-8">
        <BillInput value={bill} onChange={setBill} />
        <TipSelector tipPercent={tipPercent} onSelect={setTipPercent} />
        <PeopleSplitter value={people} onChange={setPeople} error={peopleError} />
      </div>

      {/* Results Section */}
      <ResultsDisplay
        tipPerPerson={tipPerPerson}
        totalPerPerson={totalPerPerson}
        onReset={handleReset}
        canReset={canReset}
      />
    </div>
  );
};

export default TipCalculator;
