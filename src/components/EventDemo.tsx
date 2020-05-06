import React, { useState } from "react";

const EventDemo = () => {
  const [likesCount, setLikesCount] = useState(0);

  const increaseLikesHandler = () => {
    setLikesCount((previousLikesCount) => {
      return previousLikesCount + 1;
    });
  };

  const decreaseLikesHandler = () => {
    if (likesCount !== 0) {
      setLikesCount((previousLikesCount) => {
        return previousLikesCount - 1;
      });
    }
  };

  return (
    <>
      <button onClick={decreaseLikesHandler}>Decrease likes</button>
      <button onClick={increaseLikesHandler}>Increase likes</button>
      <h4>This page has been liked {likesCount} times</h4>
    </>
  );
};

export default EventDemo;
