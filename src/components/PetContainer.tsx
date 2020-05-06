import React, { useState } from "react";

import Pet from "./Pet";

export const PetContainer = (props: any): any => {
  const petsData = [
    { id: "1", animal: "Cat", name: "Gin", age: 5 },
    { id: "2", animal: "Dog", name: "Rexio", age: 10 },
    { id: "3", animal: "Rabbit", name: "Caviar", age: 15 },
  ];

  const [pets, setPets] = useState(petsData);

  return (
    <>
      <p>Pets:</p>
      <ul>
        {pets.map((pet) => (
          <Pet key={pet.id} animal={pet.animal} name={pet.name} age={pet.age} />
        ))}
      </ul>
      <AddPetForm setPets={setPets} />
    </>
  );
};

export const AddPetForm = (props: any) => {
  const [animal, setAnimal] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const handleSubmit = (e: any): any => {
    e.preventDefault();
    props.setPets((prev: any) => {
      return prev.concat({
        id: Date.now(),
        animal: animal,
        name: name,
        age: age,
      });
    });
    setAnimal("");
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input
          value={animal}
          onChange={(e: any) => setAnimal(e.target.value)}
          placeholder="Animal"
        />
        <input
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          placeholder="Pets Name"
        />
        <input
          value={age}
          onChange={(e: any) => setAge(e.target.value)}
          placeholder="Age"
        />
        <button>Add Pet</button>
      </fieldset>
    </form>
  );
};
