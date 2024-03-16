import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0)
  setAll(allClicks.concat("l"));
  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("r"));
    setClicks({ ...clicks, right: clicks.right + 1 });
  };

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <p>{allClicks.join(" ")}</p>
    </div>
  );
};

export default App;
