import React, { useState } from "react";
import { connect } from "react-redux";
import { setRepeat } from "../../redux/events/eventActions"; // Importing setRepeat action from eventActions
import Paper from "@material-ui/core/Paper";

const Repeat = ({ comp_id, events, set_repeat }) => {
  // State to manage the repeat value for this component
  const [repeat, setRepeatValue] = useState(0);

  // Function to handle changes in the repeat value
  function handleChange(e) {
    let val = parseInt(e.target.value); // Convert the input value to an integer
    setRepeatValue(val); // Update the state with the new repeat value
    let curr = events.repeat; // Get the current repeat values from Redux state
    curr[comp_id] = val; // Update the repeat value for this component in the Redux state
    set_repeat(curr); // Dispatch the updated repeat values to Redux
  }

  return (
    <Paper elevation={3}>
      {" "}
      {/* Material-UI Paper component with elevation */}
      <div className="rounded text-center bg-red-400 p-2 my-3">
        {" "}
        {/* Container div */}
        <div className="grid grid-cols-2 my-2">
          {" "}
          {/* Grid layout */}
          <div className="text-white">Repeat</div> {/* Label */}
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={repeat}
            onChange={(e) => {
              handleChange(e); // Call handleChange on input change
            }}
          />
        </div>
        <div
          id={comp_id}
          className="text-center bg-red-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        >
          Repeat By {repeat} {/* Display the current repeat value */}
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
    set_repeat: (value) => dispatch(setRepeat(value)), // Dispatching setRepeat action
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repeat); // Connect the component to Redux store
