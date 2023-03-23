import React from 'react'
import H3 from "@material-tailwind/react/Heading3";
import H2 from "@material-tailwind/react/Heading2";
import H6 from "@material-tailwind/react/Heading6";



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
         <ul className="list-disc list-outside ml-8 text-justify">
           <li><b>Machine Independent Optimization:</b>This code optimization phase attempts to improve the <b>intermediate code</b> to get a better target code as the output. The part of the intermediate code which is transformed here does not involve any CPU registers or absolute memory locations.</li>
           <li><b>Machine Dependent Optimization:</b>Machine-dependent optimization is done after the <b>target code</b> has been generated and when the code is transformed according to the target machine architecture. It involves CPU registers and may have absolute memory references rather than relative references. Machine-dependent optimizers put efforts to take maximum advantage of the memory hierarchy.</li>
         </ul>
         <H6>Why Optimize?</H6>
          <ul className="list-disc list-outside ml-8 text-justify">
            <li>Reduce the space consumed and increases the speed of compilation.</li>
            <li>Manually analyzing datasets involves a lot of time. Hence we make use of software like Tableau for data analysis. Similarly manually performing the optimization is also tedious and is better done using a code optimizer.</li>
            <li>
            An optimized code often promotes re-usability.
            </li>
          </ul>
          <H6>When to Optimize?</H6>
          Optimization of the code is often performed at the end of the development stage since it reduces readability and adds code that is used to increase the performance.
       </p>
    </div>
  )
}
