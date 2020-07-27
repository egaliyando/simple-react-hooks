import React, { useState, useEffect } from "react";

function ComponentFunc() {
  console.log("-> Function Init");
  const [count, setCount] = useState(0);
  const handleCount = () =>
    setCount((prefState) => {
      return prefState + 1;
    });

  useEffect(() => {
    //jalan setiap di render
    console.log("-> first effect");
  });

  useEffect(() => {
    //component didmount
    console.log("-> compDidMount Eq");
  }, []);

  useEffect(() => {
    //component didupate
    if (count > 0) {
      console.log("-> compDidUpdate Eq");
    }
  }, [count]);

  useEffect(() => {
    //component willunmount
    return () => {
      console.log("-> compWilUnmount Eq");
    };
  }, [count]);

  console.log(`-> start render (${count})`);
  return (
    <>
      <button onClick={handleCount}>Count</button>
      <span>{count}</span>
    </>
  );
}

export default ComponentFunc;
