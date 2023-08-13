import React, { createContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [text, setText] = useState("");
  const [SongID, setSongID] = useState(0);
  const [SongName, setSongName] = useState("");
  return (
    <Context.Provider
      value={{ text, setText, SongID, setSongID, SongName, setSongName }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
