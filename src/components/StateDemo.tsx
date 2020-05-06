import React from "react";

const useState = React.useState;

const StateDemo = () => {
  const [theTime, setTheTime] = useState(new Date().toLocaleString());
  setTimeout(() => {
    setTheTime(new Date().toLocaleString());
  }, 1000);
  return <h3>The current time is {theTime}</h3>;
};

export default StateDemo;
