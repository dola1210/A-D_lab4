import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem('visitCount')) || 0;
    const newCount = storedCount + 1;
    localStorage.setItem('visitCount', newCount);
    setCount(newCount);
  }, []);
    
  return (
    <div className="App">
      <p align="center">這個網頁被訪問了 {count} 次。</p>
    </div>
  );
}
export default App;