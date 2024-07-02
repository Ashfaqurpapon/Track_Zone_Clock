import { useEffect, useState } from "react";
import { getOffset } from "../../../utils/timezone";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";

const ClockForm = ({
  values = { title: " ", timezone: "UTC", offset: 0 },
  handleClock,
  title = false,
  edit = false,
}) => {
  const [formValues, setFormValues] = useState({ ...values });

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormValues({
  //         ...formValues, [name]: value
  //     });

  // };

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      }));
    }
  }, [formValues.timezone]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = Number(value) * 60;
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">enter Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          disabled={title}
        />
      </div>
      <div>
        <label htmlFor="timezone">enter timezone</label>
        <select
          id="timezone"
          name="timezone"
          value={formValues.timezone}
          onChange={handleChange}
        >
          <option value="GMT">GMT</option>
          <option value="UTC">UTC</option>
          <option value="PST">PST</option>
          <option value="EST">EST</option>
          <option value="FDT">FDT</option>
          <option value="UST">UST</option>
          <option value="MST">MST</option>
        </select>
      </div>
      {(formValues.timezone === "GMT" || formValues.timezone === "UTC") && (
        <div>
          <label htmlFor="offset">enter offset</label>

          <select
            id="offset"
            name="offset"
            value={formValues.offset / 60}
            onChange={handleChange}
          >
            {getOffset().map((offset) => (
              <option key={offset} value={offset}>
                {offset}
              </option>
            ))}
          </select>
        </div>
      )}

      <button>{edit ? "Update" : "Create"}</button>
    </form>
  );
};
export default ClockForm;
