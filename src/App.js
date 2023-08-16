import React, {useState} from 'react';
import axios from 'axios';


import './App.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const mockSearchResults = [
        {title: 'Search Result 1', content: 'This is the content of the first search result.'},
        {title: 'Search Result 2', content: 'This is the content of the second search result.'},
        // ...添加更多结果...
    ];

    const handleSearchChange = (event) => {
        console.log("aaa")
        setSearchTerm(event.target.value);

        console.log("dddd")
        // Send POST request with searchTerm to backend
        axios.get('http://192.168.0.110:5000/search').then(response => {
                console.log(response.data);
                // Handle the response data as needed
            })
            .catch(error => {
                console.error(error);
                // Handle error
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search"
                    className="search-box"
                />
                {mockSearchResults.map((result, index) => (
                    <div key={index} className="search-result">
                        <h2>{result.title}</h2>
                        <p>{result.content}</p>
                    </div>
                ))}
                {/*<div className="pagination">*/}
                {/*  <ReactPaginate*/}
                {/*      pageCount={Math.ceil(mockSearchResults.length / resultsPerPage)}*/}
                {/*      onPageChange={({ selected }) => handlePageChange(selected + 1)}*/}
                {/*      containerClassName="pagination"*/}
                {/*      activeClassName="active"*/}
                {/*  />*/}
                {/*</div>*/}
            </header>
        </div>
    );
}

export default App;
