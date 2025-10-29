import React from 'react';
import TipCalculator from './components/TipCalculator';
import Logo from './components/Logo';

function App() {
  return (
    <div className="min-h-screen font-sans flex flex-col items-center justify-center p-4 sm:pt-16">
      <Logo />
      <main className="w-full max-w-4xl mt-10">
        <TipCalculator />
      </main>
    </div>
  );
}

export default App;
