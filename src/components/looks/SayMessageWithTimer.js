import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const SayMessageWithTimer = ({ character, comp_id }) => {
  // State to manage the message display and timer settings
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
  });

  /* Function to display message with timer */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);

    el2.style.display = "none"; // Hide another message box if visible

    // If message is already shown, hide it
    if (state.show_msg) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      return;
    }

    // Show the message
    setState({ ...state, show_msg: true });
    el.style.display = "block";
    el.style.position = "relative";
    el.innerHTML = state.timer_message;

    // Set a timer to hide the message after specified time
    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
    }, state.timer_for_msg * 1000); // Timer duration in milliseconds
  };

  return (
    <Paper elevation={3}>
      {" "}
      {/* Material-UI Paper component with elevation */}
      <div className="rounded text-center bg-purple-500 p-2 my-3">
        {" "}
        {/* Container div */}
        <div className="grid grid-cols-2 my-2">
          {" "}
          {/* Grid layout */}
          <div className="text-white">Message</div> {/* Label */}
          <input
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={state.timer_message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, timer_message: e.target.value });
            }}
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          {" "}
          {/* Grid layout for timer input */}
          <div className="text-white">Timer:</div> {/* Timer label */}
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.timer_for_msg}
            onChange={(e) => {
              parseInt(e.target.value) > 0 &&
                setState({ ...state, timer_for_msg: parseInt(e.target.value) });
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex flex-row flex-wrap text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => displayMessage()}
        >
          {`Say ${state.timer_message}`} {/* Display the message */}
        </div>
      </div>
    </Paper>
  );
};

// Mapping Redux state to component props
const mapStateToProps = (state) => {
  return {
    character: state.character, // Accessing character from Redux state
  };
};

export default connect(mapStateToProps)(SayMessageWithTimer); // Connect the component to Redux store
