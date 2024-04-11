import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const ThinkWithTimer = ({ character, comp_id }) => {
  // State to manage the think message display, content, and timer
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
    character_id: "",
  });

  /* Function to display Think Message with Timer */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);

    // If message is already shown, hide it
    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      el2.style.display = "none";
      return;
    }

    // Show the message and set the timer
    setState({ ...state, show_msg: true });
    el.style.display = "inline-block";
    el.style.position = "relative";
    el2.style.display = "block";
    el2.style.position = "relative";
    el.innerHTML = state.timer_message;

    // Clear the timer after specified time
    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      el2.style.display = "none";
    }, state.timer_for_msg * 1000);
  };

  return (
    <Paper elevation={3}>
      {" "}
      {/* Material-UI Paper component with elevation */}
      <div className="rounded text-center bg-purple-700 p-2 my-3">
        {" "}
        {/* Container div */}
        <div className="grid grid-cols-2 my-2">
          {" "}
          {/* Grid layout for message and timer input */}
          <div className="text-white">Message</div>{" "}
          {/* Label for message input */}
          <input
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={state.timer_message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, timer_message: e.target.value });
            }} // Update timer message content on input change
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          {" "}
          {/* Grid layout for timer input */}
          <div className="text-white">Timer:</div> {/* Label for timer input */}
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.timer_for_msg}
            onChange={(e) => {
              parseInt(e.target.value) > 0 &&
                setState({ ...state, timer_for_msg: parseInt(e.target.value) });
            }} // Update timer duration on input change
          />
        </div>
        <div
          id={comp_id}
          className="flex flex-row flex-wrap text-center bg-purple-900 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => displayMessage()} // Call displayMessage function on click
        >
          {`Think ${state.timer_message}`}{" "}
          {/* Display the Think message with timer message */}
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

export default connect(mapStateToProps)(ThinkWithTimer); // Connect the component to Redux store
