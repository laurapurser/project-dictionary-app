import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded]= useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }
  function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  //[0].meanings[0].definitions[0].definition
  function handleSearch(event) {
    event.preventDefault();
search();
    
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function load(){
    setLoaded(true);
    search();
  }

if (loaded) {


  return (
    
    <div className="Dictionary">
    <section>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={handleKeywordChange}
        />
        
      </form>
      <div className="form-text">
      Suggested words: sunset, yoga, plant...
      </div>
      </section>
     
      <Results results={results} />
    </div>
  );
} else {
   
  load() 
  return "Loading";
}
}
