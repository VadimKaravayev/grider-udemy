import React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';

const startService = async () => {
  await esbuild.initialize({
    wasmURL: '/esbuild.wasm',
  });
};

startService();

function App() {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    console.log(input);
    console.log(esbuild);
    let result = await esbuild.transform(input, {
      loader: 'jsx',
      target: 'es2015',
    });

    setCode(result.code);

    console.log(result);
  };

  return (
    <div>
      <textarea
        name=""
        id=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
}

export default App;
