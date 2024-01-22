
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import BodyPage from './components/BodyPage';

function App() {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  return (
    <>
      <Header onTypeChange={handleTypeChange} />
      <BodyPage selectedType={selectedType} />
      

      
      
    </>
  );
}

export default App;
