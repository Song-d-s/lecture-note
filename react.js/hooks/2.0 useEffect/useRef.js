import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const potato = useRef();
  setTimeout(() => potato.current.focus(), 2000);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input ref={potato} placeholder="la" />
    </div>
  );
}
