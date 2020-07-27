import React, { useState } from "react";
// function berguna untuk SHARE LOGIC
function useCounter() {
  const [state, setState] = useState(0);
  const handleState = () => {
    setState((currentState) => currentState + 1);
  };

  const HandleTriple = () => {
    handleState();
    handleState();
    handleState();
  };

  return [state, handleState, HandleTriple];
}

export default useCounter;
