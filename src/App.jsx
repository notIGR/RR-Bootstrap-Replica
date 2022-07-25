import React from 'react';
import './App.css';
import TopBar from './components/topBar'
import Background from './components/background'
import StoreListings from './components/storeListings'


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
