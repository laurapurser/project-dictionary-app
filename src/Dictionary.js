import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }
  //[0].meanings[0].definitions[0].definition
  function handleSearch(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" />
      </form>
      <Results results={results} />
    </div>
  );
}
