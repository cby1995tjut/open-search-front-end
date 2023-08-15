import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={handleSearchSubmit}>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Enter your search query"
            />
            <button type="submit">Search</button>
          </form>
        </header>
      </div>
  );
}

export default App;
