import React from 'react'
import Navbar from '../components/Navbar'
import H2 from "@material-tailwind/react/Heading2";
import LexicalAnalyser from '../components/LexicalAnalyser';
import SyntaxAnalysis from '../components/SyntaxAnalysis';
import SemanticAnalyser from '../components/SemanticAnalyser';
import IntermediateCodeG from '../components/IntermediateCodeG';
import CodeOptimizer from '../components/CodeOptimizer';

function intro() {
  return (
    <>
    <Navbar/>
    <div>
        <div className="py-5 text-center"><H2>So, what is a Compiler?</H2></div>
        <div className="mt-2 mx-6 text-center"><p>A compiler is a special program that converts source code of a programming language to machine code,byte code or another programming 
        language.</p>
        <p>
        <b>Language processing systems (using Compiler):</b> We know a computer is a logical assembly of Software and Hardware. The hardware knows a language, that is hard for us to grasp, consequently, we tend to write programs in a high-level language, that is much less complicated for us to comprehend and maintain in thoughts. Now, these programs go through a series of transformations so that they can readily be used by machines. 
        </p>
        </div>
        <div className='grid justify-items-center mt-2'>
            <H2><b>Phases of a Compiler</b></H2>
            Broadly speaking, there are two major phases of a compiler which in turn have many parts, each of which take input from their previous level.
            <img src={require("../assets/img/compilerPhases.jpg")} alt="compiler-Phases" style={{height:"300px",maxWidth:"100%", objectFit:"contain", margin: "15px 0"}}/>
            <H2>Analysis Phase</H2>
        </div>
    </div>
    <LexicalAnalyser/>
    <SyntaxAnalysis/>
    <SemanticAnalyser/>
    <IntermediateCodeG/>
    <CodeOptimizer/>
    </>
  )
}

export default intro