import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // 当前页码
  const resultsPerPage = 5; // 每页显示的结果数量

  const mockSearchResults = [
    { title: 'Search Result 1', content: 'This is the content of the first search result.' },
    { title: 'Search Result 2', content: 'This is the content of the second search result.' },
    // ...添加更多结果...
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const displayedResults = mockSearchResults.slice(startIndex, endIndex);

  return (
      <div className="App">
        <header className="App-header">
          <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search Google"
              className="search-box"
          />
          {displayedResults.map((result, index) => (
              <div key={index} className="search-result">
                <h2>{result.title}</h2>
                <p>{result.content}</p>
              </div>
          ))}
          <div className="pagination">
            <ReactPaginate
                pageCount={Math.ceil(mockSearchResults.length / resultsPerPage)}
                onPageChange={({ selected }) => handlePageChange(selected + 1)}
                containerClassName="pagination"
                activeClassName="active"
            />
          </div>
        </header>
      </div>
  );
}

export default App;
