import { useState } from 'react';
import OpenModalButton from './components/OpenModalButton';
import Modal from './components/modal/Modal';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <OpenModalButton></OpenModalButton>
        <Modal></Modal>
      </div>
    </>
  );
}

export default App;
