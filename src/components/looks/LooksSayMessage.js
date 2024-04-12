import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const SayMessage = ({ character, comp_id }) => {
  // State to manage the message display
  const [state, setState] = useState({
    show_msg: false,
    message: "",
    character_id: "",
  });

  /* Function to display or hide the message */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);

    // If message is already shown and belongs to the same character, hide it
    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      return;
    }

    // Show the message
    setState({ ...state, show_msg: true, character_id: character.active });
    el.style.display = "block";
    el.style.position = "relative";
    el2.style.display = "none";
    window.clearTimeout();
    el.innerHTML = state.message; // Display the message
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
            value={state.message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, message: e.target.value });
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex text-center flex-row flex-wrap bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => displayMessage()}
        >
          {`Say ${state.message}`} {/* Display the message */}
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

export default connect(mapStateToProps)(SayMessage); // Connect the component to Redux store
