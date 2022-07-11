import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  //console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
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
