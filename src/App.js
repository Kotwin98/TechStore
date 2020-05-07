import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
