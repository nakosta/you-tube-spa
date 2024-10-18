import React, { useState } from "react";
import LifecycleComponent1 from "./components/LifecycleComponent1";
import LifecycleComponent2 from "./components/LifecycleComponent2";


const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      {count}
      <button onClick={() => setCount(count => count + 1)}>KILL</button>
      {count % 2 === 0 ? <LifecycleComponent1 /> : <p>LOX</p>}
    </div>
  );
};

export default App;
