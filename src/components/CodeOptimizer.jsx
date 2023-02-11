import React from 'react'
import H3 from "@material-tailwind/react/Heading3";
import H2 from "@material-tailwind/react/Heading2";


export default function CodeOptimizer() {
  return (
    <div className="grid justify-items-center mt-5">
       <H2>Synthesis Phase</H2>
       <H3>Code Optimizer</H3> 

       <p className="block font-sans text-base font-light leading-relaxed text-justify w-3/5 ml-7 antialiased">
         It optimizes the code so that it consumes fewer resources and produces more speed. The code is not altered but merely transformed into a form which is more efficient.
         Compiler optimizing process should meet the following objectives:
         <ul className="list-disc list-outside ml-8 text-justify">
           <li>The optimization must not, in any way, change the meaning of the program.</li>
           <li>Optimization should increase the speed and performance of the program.</li>
           <li>The compilation time must be kept reasonable.</li>
           <li>The optimization process should not delay the overall compiling process.</li>
         </ul>
         Optimization can be of two types: Machine-independent and Machine-dependent.
       </p>
    </div>
  )
}
