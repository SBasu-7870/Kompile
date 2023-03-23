import React from 'react';
import H3 from "@material-tailwind/react/Heading3";

function TCGenerator() {
  return (
    <div className="grid justify-items-center mt-5">
       <H3>Target Code Generator</H3>
       <p className="block font-sans text-base font-light leading-relaxed text-justify w-3/5 ml-7 antialiased">
       The main purpose of the Target Code generator is to write a code that the machine can understand and also register allocation, instruction selection, etc. The output is dependent on the type of assembler. This is the final stage of compilation. The optimized code is converted into relocatable machine code which then forms the input to the linker and loader.
       </p>
    </div>
  )
}

export default TCGenerator