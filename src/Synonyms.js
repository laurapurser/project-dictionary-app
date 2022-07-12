import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return (
            <div>
              <ul className="synonym-list">
                <li key={index}>
                  <em>
                    <strong> {synonyms} </strong>
                  </em>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
