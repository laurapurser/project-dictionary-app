import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  console.log(props.results.phonetics);
  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
        {props.results.phonetics.map(function (phonetic, index) {
          if (phonetic.audio) {
            return (
              <div key={index}>
                <a href={phonetic.audio} target="_blank">
                  Listen
                </a>{" "}
                {phonetic.text}{" "}
              </div>
            );
          } else {
            return null;
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
