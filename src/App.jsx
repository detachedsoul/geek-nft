import { useState } from 'react';
import { ToggleElement } from "./helpers/Context";
import Header from './components/Header';
import Container from './components/Container';
import './assets/css/style.css';
import './assets/icons/uicons.css';
import './assets/css/font.css';

function App() {

  const [isActive, setNavActive] = useState(false);

  return (
    <ToggleElement.Provider value={{isActive, setNavActive}}>
      <Header />
      <Container />
    </ToggleElement.Provider>
  );
}

export default App;
