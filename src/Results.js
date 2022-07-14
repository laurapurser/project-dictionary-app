import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h3 className="title">{props.results.word}</h3>
          {props.results.phonetics.map(function (phonetic, index) {
            if (phonetic.audio) {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </section>

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
