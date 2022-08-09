import React, { useState } from "react";

export const MyContext = React.createContext();

const SimpleContext = (props) => {
  const [text, setText] = useState("This is seen by all components");

  return (
    <MyContext.Provider
      value={{
        text,
        setText,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default SimpleContext;
