import React, { useState, useRef } from "react";
import H3 from "@material-tailwind/react/Heading3";
import { Button } from "@material-tailwind/react";
import CodeEditor from "react-simple-code-editor";
// import 'react-simple-code-editor/dist/index.css';
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import Table from "./Table";

function LexicalAnalyser() {
  const [data, setData] = useState({}); //state for storing the lexemes
  const [code, setCode] = useState(""); //state for storing the C code in the editor
  const [showTable, setShowTable] = useState(false); //result table visibilty
  const [scrollAmount, setScrollAmount] = useState(0);
  const ref = useRef(null);

  const clearStr = () => {
    let cProgram = code;
    cProgram = cProgram.replace(/#include *<.*>/g, "");
    cProgram = cProgram.replace(/\/\/.*$/gm, "");
    cProgram = cProgram.replace(/\*[\s\S]*?\*/, "");
    let cleanedString = cProgram.replace(/(\r\n|\n|\r)/gm, " ");

    return cleanedString;
  };

  const getKeyword = (cProgram) => {
    let Keywordregex =
      /\b(auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|restrict|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/g;
    let keywords = cProgram.match(Keywordregex);

    let newKeywords = [...new Set(keywords)];

    return newKeywords;
  };

  const getDelim = (cProgram) => {
    const delimiters = cProgram.match(/[{}();,:"']/g);
    let newDelimiters = [...new Set(delimiters)];
    return newDelimiters;
  };

  const getIdentifiers = (cProgram) => {
    let identifiers = [];
    let dataTypes = [
      "int",
      "double",
      "float",
      "char",
      "long",
      "short",
      "signed",
      "unsigned",
    ];
    let regex = new RegExp(
      `\\b(${dataTypes.join("|")})\\s+[a-zA-Z_][a-zA-Z0-9_]*`,
      "g"
    );
    let matches = cProgram.match(regex);
    if (matches !== null) {
      for (let match of matches) {
        let identifier = match.split(/\s+/)[1];
        identifiers.push(identifier);
      }
    }
    let newIdentifiers = [...new Set(identifiers)];
    return newIdentifiers;
  };

  const getOperators = (cProgram) => {
    let operators = [];
    let inSingleQuote = false;
    let inDoubleQuote = false;
    for (let i = 0; i < cProgram.length; i++) {
      let currentChar = cProgram[i];
      if (currentChar === "'" && cProgram[i - 1] !== "\\") {
        inSingleQuote = !inSingleQuote;
      } else if (currentChar === '"' && cProgram[i - 1] !== "\\") {
        inDoubleQuote = !inDoubleQuote;
      } else if (!inSingleQuote && !inDoubleQuote) {
        if (currentChar.match(/[+\-*/%<>=&|^]/)) {
          operators.push(currentChar);
        }
      }
    }
    let newOperators = [...new Set(operators)];
    return newOperators;
  };

  const generateData = () => {
    const cProgram = clearStr();
    const delimiters = getDelim(cProgram);
    const keywords = getKeyword(cProgram);
    const identifiers = getIdentifiers(cProgram);
    const operators = getOperators(cProgram);

    let realNumbersRegex = /\b([+-]?((\d+\.\d+)|(\d+\.\d+[eE][+-]?\d+)))\b/g;
    let realNumbers = cProgram.match(realNumbersRegex);

    realNumbers = [...new Set(realNumbers)];

    let integersRegex = /\b([+-]?\d+)\b/g;
    let integers = cProgram.match(integersRegex);
    integers = [...new Set(integers)];

    console.log({
      delimiters,
      keywords,
      identifiers,
      operators,
      realNumbers,
      integers,
    });
    return {
      delimiters,
      keywords,
      identifiers,
      operators,
      realNumbers,
      integers,
    };
  };

  const handleClick = () => {
    setData(generateData());
    setScrollAmount(window.innerHeight * 0.8);
    setShowTable(true);
  };

  const handleScroll = () => {
    ref.current.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleClear = () => {
    setCode("");
    setData({});
    setShowTable(false);
  };

  return (
    <div
      className="grid justify-items-center mt-5"
      ref={ref}
      onScroll={handleScroll}
    >
      <div className="py-3 text-center mx-6">
        <H3>Lexical Analyser</H3>
      </div>

      <p className="block font-sans text-xl font-normal leading-relaxed text-inherit antialiased">
        The Lexical Analyser is the first phase of compiler phases.It is also
        called a scanner.
      </p>

      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        It takes the output of the preprocessor (which performs file inclusion
        and macro expansion) as the input which is in a pure high-level
        language.
      </p>
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        It reads the characters from the source program and groups them into
        lexemes(sequence of characters that “go together”).
      </p>
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        Each lexeme corresponds to a token. Tokens are defined by regular
        expressions which are understood by the lexical analyzer.
      </p>

      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        It also removes lexical errors (e.g., erroneous characters), comments,
        and white space.
      </p>

      <p className="mt-4 block font-sans text-xl font-normal leading-relaxed text-inherit antialiased">
        Below is a sample illustration on how lexemes are formed from your
        source code.
      </p>

      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">The code editor below takes a C program as an input and lists all the tokens after analysing the source code.</p>
      <div className="mt-3">
        <CodeEditor
          value={code}
          onValueChange={setCode}
          highlight={(code) => highlight(code, languages.clike)}
          padding={20}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            backgroundColor: "#2D2D2D",
            minHeight: "12.5rem",
            width: "44.5rem",
            caretColor: "green",
            color: "white",
            borderRadius: "10px",
          }}
        />
        <div
          className="flex w-max mt-2 gap-4 flex-row-reverse"
          style={{ width: "30rem" }}
        >
          <Button className="transition ease-in-out delay-150" ripple={true} onClick={handleClick}>
            Analyse
          </Button>
          <Button variant="outlined" onClick={handleClear}>
            Clear
          </Button>
        </div>
        {showTable && Object.keys(data).length > 0 ? (
          <Table obj={data} />
        ) : null}
      </div>
    </div>
  );
}

export default LexicalAnalyser;
