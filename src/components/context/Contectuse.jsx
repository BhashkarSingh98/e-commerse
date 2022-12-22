import React, { createContext } from "react";
import A from "./A";

const data1 = createContext();
const data2 = createContext();

const Contectuse = () => {
    const name ="bhahskar"
    const age=24
  return (
    <div>
      <h1>parent</h1>
      <data1.Provider value={name}>
        <data2.Provider value={age}>
          <A />
        </data2.Provider>
      </data1.Provider>
    </div>
  );
};

export default Contectuse;
export {data1,data2}
