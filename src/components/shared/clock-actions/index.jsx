import { useState } from "react";
import ClockForm from "../clock-form";

const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleClock = (values) => {
    createClock(values);
  };

  return (
    <div className="">
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {local ? (
        <button onClick={() => setIsCreate(!isCreate)}>Create</button>
      ) : (
        <button onClick={() => deleteClock(clock.id)}>Delete</button>
      )}
      {isEdit && (
        <>
          <h3>Edit Clock</h3>
          <ClockForm
            value={clock}
            handleClock={updateClock}
            title={!local}
            edit={true}
          />
        </>
      )}
      {isCreate && (
        <>
          <h3>create a new Clock</h3>
          <ClockForm handleClock={handleClock} />
        </>
      )}
    </div>
  );
};
export default ClockActions;

// export default ClockActions;
// const handleChange =(e)=>{
//   let {name,value}=e.target
//   if(name==='offset'){value =Number(value)*60}
//   updateClock({
// [name]:value
//   })
// }
/* <div>
<input type="text" name="title" value={clock.title} onChange={handleChange} />
<select name="timezone" value={clock.timezone}  onChange={handleChange}>
  <option value="GMT">GMT</option>
  <option value="EST">EST</option>
  <option value="PST">PST</option>
  <option value="EDT">EDT</option>
  <option value="UTC">UTC</option>
  <option value="MST">MST</option>
</select>
{(clock.timezone==='GMT'||clock.timezone==='UTC') &&(
  <select name="offset" value={clock.offset/60}  onChange={handleChange}>
      {defaultOffset.map(offset=>(
          <option key={offset} value={offset}>{offset}</option>
      ))}
  </select>
)}
</div> */
