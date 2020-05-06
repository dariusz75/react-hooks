import React from "react";

const Pet = (props: any): any => {
  return (
    <li>
      This is {props.animal}, its {props.name} it name and it is {props.age} old
    </li>
  );
};

export default Pet;
