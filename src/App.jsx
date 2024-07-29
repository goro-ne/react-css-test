import { useState } from 'react';
import './App.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <InlineStyle />
        <CssModules />
        <StyledJsx />
      </div>
    </>
  );
}

export default App;
