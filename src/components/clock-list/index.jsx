import ClockListItem from "./clock-list-item";

const ClockList = ({ clocks, updateClock, deleteClock }) => {
  return (
    <div>
      <h3>Other Clocks</h3>
      <hr />
      {clocks.length === 0 ? (
        <p>There is no clock,please create one.</p>
      ) : (
        <div className="flex grid grid-cols-4 gap-4">
          {clocks.map((clock) => (
            <ClockListItem
              clock={clock}
              key={clock.id}
              updateClock={updateClock}
              deleteClock={deleteClock}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default ClockList;
