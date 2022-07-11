import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.data.synonyms);

  return (
    <div className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>

      {props.data.definitions.map(function (definition, index) {
        return (
          
          <div key={index}>
            <p>
              {" "}
              {definition.definition}
              <br />
              <em> {definition.example}</em>
            </p>
          </div>
        );
        
      })}
     <Synonyms synonyms={props.data.synonyms} /> 
    </div>
    
  );
}
