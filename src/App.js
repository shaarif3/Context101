import React, { createContext } from 'react';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';
const Firstname = createContext();
const Lastname = createContext();
function App() {
  return (
    <>
      <Firstname.Provider value={'Shaarif'}>
        <Lastname.Provider value={'Shahid'}>
          <FirstChild />
          <SecondChild />
        </Lastname.Provider>
      </Firstname.Provider>
    </>
  );
}

export default App;
export { Firstname, Lastname };
