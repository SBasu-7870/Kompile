import React from 'react'
import H3 from "@material-tailwind/react/Heading3";

function SemanticAnalyser() {
  return (
    <div className="grid justify-items-center mt-5">
        <H3>Semantic Analyser</H3>
        <p className="block font-sans text-xl font-normal leading-relaxed text-center antialiased">
          Semantic Analysis or Parsing is the next phase in compiler phases.
        </p>

        <p className="block font-sans text-base font-light leading-relaxed text-center antialiased text-justify w-3/5">
          Semantic Analysis verifies the parse tree, i.e, whether it's meaningful or not.
          It then produces a verified parse tree. 
          <br/>Type checking, label checking, flow control checking is also done in this phase.
        </p>
        <img src={require("../assets/img/sementicAnalyzer.jpg")} alt="Semantic_analyzer" style={{height:"300px",maxWidth:"100%", objectFit:"contain", margin: "15px 0"}}/>
    </div>
  )
}

export default SemanticAnalyser