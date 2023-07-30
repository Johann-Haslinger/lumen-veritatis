import { useEffect, useState } from 'react';
import ScreenHandler from './pages/ScreenHandler';
import InitSystem from './systems/InitSystem';
import { delay } from './components/Delay';

function App() {
  return (
    <>
    <div className='fixed top-0 left-0 bg-black h-screen w-screen'></div>
      <InitSystem />
      <ScreenHandler />
    </>
  );
}

export default App;
