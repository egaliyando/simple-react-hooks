import React, { useState } from "react";
import useCounter from "./useCounter";
import "./style.css";

function ComponentState() {
  const [state, setState] = useState({
    subscribe: false,
  });

  const handleSubscribe = () => {
    setState({
      ...state, //fungsi untuk MERGE STATE atau meng-copy state agar tidak ter-replace
      subscribe: !state.subscribe, //untuk mengganti state "CHANGE STATE"
    });
  };
  const [like, handleLike, handleTriple] = useCounter(0);
  const [dislike, handleDisike] = useCounter(0);

  //   const handleLike = () => {
  //     setState((currentState) => ({
  //       ...state, //fungsi untuk MERGE STATE atau meng-copy state agar tidak ter-replace
  //       like: currentState.like + 1, //untuk mengganti state "CHANGE STATE"
  //     }));
  //   };

  return (
    <div className="w-full flex h-screen">
      <div className="m-auto">
        <div>
          <button onClick={handleSubscribe}>Subscribe</button>
          <p>{JSON.stringify(state.subscribe)}</p>
        </div>
        <div className="flex">
          <button onClick={handleLike}>Like</button>
          <p>: {like}</p>
        </div>
        <div className="flex">
          <button onClick={handleDisike}>Disike</button>
          <p>: {dislike}</p>
        </div>
        <div className="flex">
          <button onClick={handleTriple}>Triple Like</button>
          <p>: {like}</p>
        </div>
      </div>
    </div>
  );
}

export default ComponentState;
