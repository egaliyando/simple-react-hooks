import React, { useState } from "react";
// import ComponentClass from "./ComponentClass";
// import ComponentFunc from "./ComponentFunc";
import NewsFeed from "./NewsFeed";

function SideEffect() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => setToggle((curentState) => !curentState);

  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      {toggle && <NewsFeed />}
    </>
  );
}

export default SideEffect;
