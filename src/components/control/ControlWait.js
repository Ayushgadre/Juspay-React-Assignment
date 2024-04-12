import React, { useState } from "react";
import { connect } from "react-redux";
import { setWait } from "../../redux/events/eventActions"; // Importing setWait action from eventActions
import Paper from "@material-ui/core/Paper";

const Wait = ({ events, comp_id, set_wait }) => {
  const [wait, setWaitValue] = useState(0); // State to manage the wait value for this component

  // Function to handle changes in the wait value
  function handleChange(e) {
    let val = parseInt(e.target.value); // Convert the input value to an integer
    setWaitValue(val); // Update the state with the new wait value
    let curr = events.wait; // Get the current wait values from Redux state
    curr[comp_id] = val; // Update the wait value for this component in the Redux state
    set_wait(curr); // Dispatch the updated wait values to Redux
  }

  return (
    <Paper elevation={3}>
      {" "}
      {/* Material-UI Paper component with elevation */}
      <div className="text-center rounded bg-red-400 p-2 my-3">
        {" "}
        {/* Container div */}
        <div className="grid grid-cols-2 my-2">
          {" "}
          {/* Grid layout */}
          <div className="text-white">Wait</div> {/* Label */}
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={wait}
            onChange={(e) => handleChange(e)} // Call handleChange on input change
          />
        </div>
        <div
          id={comp_id}
          className="text-center bg-red-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        >
          Wait {wait} seconds {/* Display the current wait value */}
        </div>
      </div>
    </Paper>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    events: state.event, // Accessing events from Redux state
  };
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    set_wait: (value) => dispatch(setWait(value)), // Dispatching setWait action
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wait); // Connect the component to Redux store
