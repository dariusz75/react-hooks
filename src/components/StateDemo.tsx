import React, { useEffect } from "react";

const useState = React.useState;

const StateDemo = () => {
  const [theTime, setTheTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(
      () => setTheTime(new Date().toLocaleString()),
      1000
    );
    // return state in useEffect is to clear useEffect hook
    return () => clearInterval(interval);
  });
  return <h3>The current time is {theTime}</h3>;
};

export default StateDemo;
