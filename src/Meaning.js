import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
 // console.log(props.data.synonyms);

  return (
    <div className="Meaning">
    <section>
      <h3>{props.data.partOfSpeech}</h3>

      {props.data.definitions.map(function (definition, index) {
        return (
          
          <div key={index}>
            <p>
              {" "}
               {definition.definition}
              <br />
              <div className="example"> {definition.example}</div>
            </p>
          </div>
        );
        
      })}
     <Synonyms synonyms={props.data.synonyms} /> 
     </section>
    </div>

    
  );
}
