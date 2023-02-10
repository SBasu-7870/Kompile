import React from 'react';
import H3 from "@material-tailwind/react/Heading3";
import Carousel from './Carousel';

function SyntaxAnalysis() {
  const slides = [
    {
      uri: require("../assets/img/parse-tree1.png"),
      alt: "image 1"
      
    },
    {
      uri: require("../assets/img/parse-tree2.png"),
      alt: "image 2"
    },
    {
      uri: require("../assets/img/parse-tree3.png"),
      alt: "image 3"
    },
    {
      uri: require("../assets/img/parse-tree4.png"),
      alt: "image 4"
    },
    {
      uri: require("../assets/img/parse-tree5.png"),
      alt: "image 5"
    },
  ];


  return (
    <div className="grid justify-items-center mt-5">
        <H3>Syntax Analyser</H3>
        
        <p className="block font-sans text-xl font-normal leading-relaxed text-inherit antialiased">
          Syntax Analysis or Parsing is the second phase,i.e,the phase after lexical analysis.
        </p>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-justify w-3/5">
          It checks the syntactical structure of the input, i.e, whether the input is in the correct syntax of the programming language or not.It checks so by constructing a data structure called Parse Tree.The parse tree is constructed by using the pre-defined Grammar of the language and the input string.
          <br/>If the given input string can be produced with the help of the syntax tree (in the derivation process), the input string is found to be in the correct syntax. If not, the error is reported by the syntax analyzer.
          <br/>The main goal of syntax analysis is to create a parse tree or abstract syntax tree (AST) of the source code, which is a hierarchical representation of the source code that reflects the grammatical structure of the program.
        </p>
        <img src={require("../assets/img/Parser_working.png")} alt="parser_working" style={{height:"300px",maxWidth:"100%", objectFit:"contain", margin: "15px 0"}}/>

        <p className="block font-sans text-xl font-normal leading-relaxed text-inherit antialiased">Below is an example of parse Tree generation for the expression "a*b+c"</p>
    
      <Carousel/>
      
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-justify w-3/5 ml-7">
          Here, the pushdown automata (PDA) is used to design the parse tree in the syntax analysis phase.
          <br/> There are certain rules associated with the parse tree:
          <div><ul className="ml-8 list-disc list-inside text-justify">
            <li>Any identifier is an expression</li>
            <li>Any number can be called an expression</li>
            <li>Performing any operations in the given expression will always result in an expression. For example, the sum of two expressions is also an expression.</li>
            <li>The parse tree can be compressed to form a syntax tree</li>
          </ul>
          </div>
      </p>
      
  </div>  
  )
}

export default SyntaxAnalysis





