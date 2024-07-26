import { useState } from 'react';
import './App.css';
import { InlineStyle } from './components/InlineStyle';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <InlineStyle />
      </div>
    </>
  );
}

export default App;
