import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";
import useClock from "./hooks/useClock";
import ClockDisplay from "./components/shared/clock-display";
import { useState } from "react";
import { generate } from "shortid";
import shortid from "shortid";
const LOCAL_CLOCK_INIT = {
  title: "my clock",
  timezone: "",
  offset: 0,
  date: null,
};
function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);
  const updateLocalClock = (date) => {
    setLocalClock({ ...localClock, ...date });
  };
  const createClock = (clock) => {
    clock.id = generate();
    setClocks([...clocks, clock]);
  };

  const updateClock = (updatedClock) => {
    console.log(updatedClock);
    const updatedClocks = clocks.map((clock) => {
      //console.log(clock.id);
      //console.log(updatedClock.id);

      if (clock.id === updatedClock.id)
        //console.log(34);
        return updatedClock;
      return clock;
    });
    setClocks(updatedClocks);
  };

  const deleteClock = (id) => {
    const updatedClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedClocks);
  };

  return (
    <div className="App mx-8 mt-6 ">
      {/* <div className=" border-solid border-2 border-sky-500"> */}
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />
      {/* </div> */}
      <div>
        <ClockList
          clocks={clocks}
          updateClock={updateClock}
          deleteClock={deleteClock}
        />
      </div>
    </div>
  );
}

export default App;
