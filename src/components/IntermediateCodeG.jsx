import React from 'react'
import H3 from "@material-tailwind/react/Heading3";

function IntermediateCodeG() {
  return (
    <div className="grid justify-items-center mt-5">
        <H3>Intermediate Code Generator</H3>

      <p className="block font-sans text-base font-light leading-relaxed text-justify w-3/5 ml-7 antialiased">
         It is used to generate intermediate code which is a form which can be readily interpreted by the machine.
         <br/>In the analysis-synthesis model of a compiler, the front end of a compiler translates a source program into an independent intermediate code, then the back end of the compiler uses this intermediate code to generate the target code.
         <br/>Benefits of Machine independent code:
         <div>
         <ul className="ml-8 list-disc list-inside text-justify">
            <li>Enhanced Portability</li>
            <li>Retargeting is facilitated</li>
            <li>Easier to improve source code performance by optimising the intermediate code</li>
          </ul>
         </div>
         Intermediate code can be either language specific like ByteCode for Java or language independent like 3-address code.
         <br/>
      </p>
    </div>
  )
}

export default IntermediateCodeG