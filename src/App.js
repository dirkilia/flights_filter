import React from 'react';
import FilterContainer from './components/Filter/FilterContainer';
import './App.css';
import result from './flights.json'

function App() {
  return (
    <div className='page'>
      <FilterContainer data={result}/>
    </div>
    
  );
}

export default App;
