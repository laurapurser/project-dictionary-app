import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return (
            <ul className="synonym-list" key={index}>
              <li>{synonyms}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
