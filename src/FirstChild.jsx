import React from 'react';
import { Firstname, Lastname } from './App';
const FirstChild = () => {
  return (
    <div>
      <Firstname.Consumer>
        {(fname) => {
          return (
            <Lastname.Consumer>
              {(Lname) => {
                return (
                  <h1>
                    My name is {fname} {Lname}
                  </h1>
                );
              }}
            </Lastname.Consumer>
          );
        }}
      </Firstname.Consumer>
    </div>
  );
};

export default FirstChild;
