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
         <br/>Some of the commonly used intermediate code representations are:
         <div>
          <ul className='ml-8 list-disc list-outside text-justify'>
            <li>
              <b>Postfix Notation:</b>The postfix notation places the operator at the right end.
              In general, if e1 and e2 are any postfix expressions, and + is any binary operator, the result of applying + to the values denoted by e1 and e2 is postfix notation by e1e2+ . No parentheses are needed in postfix notation because the position and arity (number of arguments) of the operators permit only one way to decode a postfix expression. Some Examples:
              <ul className='ml-8 list-disc list-outside'>
                <li>Postfix representation of <b>(a+b)*c is: ab + c *</b></li>
                <li>Postfix representation of <b>(a – b) * (c + d) + (a – b) is: ab – cd + *ab -+</b></li>
              </ul>
            </li>
            <li>
              <b>Three-Address Code (3AC):</b> A statement involving no more than three references(two for operands one for result) is known as three-address statement.A sequence of three address statements is referred to as three address codes.3AC will have the form x = y op z where x,y and z will have address(a location in memory).
              <br/>
              <br/><b>Example:</b> The three address code for the expression a + b * c + d :
              <br/> &emsp; <b>T1 = b * c ; T2 = a + T1 ; T3 = T2 + d </b>  T1 , T2 , T3 are temporary variables.
              <br/> There are 3 ways to represent a Three Address Code in compiler design:
              <ul className='ml-8 list-decimal list-outside'>
                <li>Quadruples</li>
                <li>Triples</li>
                <li>Indirect Triples</li>
              </ul>
            </li>
            <li>
              <b>Syntax Tree:</b>It is basically a condensed form of a parse tree.The operator and keyword nodes of the parse tree are moved to their parents and a chain of single productions is replaced by the single link in the syntax tree the internal nodes are operators and child nodes are operands.
              <img src={require("../assets/img/SyntaxTree.png")} alt="syntax_tree" style={{height:"400px",maxWidth:"100%", objectFit:"contain", margin: "15px 0 15px 7rem"}}/>
            </li>
          </ul>
         </div>
      </p>
    </div>
  )
}

export default IntermediateCodeG