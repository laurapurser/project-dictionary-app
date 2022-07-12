import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
        {props.results.phonetics.map(function (phonetic, index) {
          if (phonetic.audio) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          } else {
            return <div className="phonetic-text">{phonetic.text}</div>;
          }
        })}

        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meaning data={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
