import React from "react";

const Pet = (props: any): any => {
  const handleDelete = () => {
    props.setPets((prev: any) => prev.filter((pet: any) => pet.id != props.id));
  };
  return (
    <li>
      This is {props.animal}, its {props.name} it name and it is {props.age} old
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Pet;
