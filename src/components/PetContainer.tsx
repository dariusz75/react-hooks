import React, { Children } from "react";

import Pet from "./Pet";

const PetContainer = (props: any): any => {
  const pets = [
    { animal: "Cat", name: "Gin", age: 5 },
    { animal: "Dog", name: "Rexio", age: 10 },
    { animal: "Rabbit", name: "Caviar", age: 15 },
  ];

  return (
    <>
      <p>Pets:</p>
      <ul>
        {pets.map((pet) => (
          <Pet animal={pet.animal} name={pet.name} age={pet.age} />
        ))}
        <Pet animal="cat" name="Ginger" age={3} />
        <Pet animal="dog" name="Rex" age={6} />
        <Pet animal="rabbit" name="Cava" age={10} />
      </ul>
    </>
  );
};

export default PetContainer;
