import * as React from "react";

function Time() {
  const [time, setTime] = React.useState("");
  React.useEffect(() => {
    // setTime(Date().toLocaleString());
    const current = new Date();
    // By default US English uses 12hr time with AM/PM
    const currentTime = current.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setTime(currentTime);
  });

  return <div>{time}</div>;
}

export default Time;
