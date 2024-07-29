import { useState } from 'react';
import './App.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
      </div>
    </>
  );
}

export default App;
