import React, { useContext } from 'react';
import { Firstname, Lastname } from './App';
const SecondChild = () => {
  const Fname = useContext(Firstname);
  const Lname = useContext(Lastname);
  return (
    <div>
      My name is {Fname} {Lname}
    </div>
  );
};

export default SecondChild;
