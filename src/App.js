import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  // console.log(state);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
    // console.log("clicked" + ctime++);
  };

  setInterval(UpdateTime, 1000);
  return (
    <>
      <h1>{ctime} </h1>
      {/* <button onClick={UpdateTime}></button> */}
    </>
  );
};
export default App;
