import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const HideMessage = ({ character, comp_id }) => {
  /* Function to hide the message */
  const displayMessage = () => {
    window.clearTimeout(); // Clear any existing timeout (not sure if this is intended)
    const el = document.getElementById(`${character.active}-message-box`); // Get the message box element
    const el2 = document.getElementById(`${character.active}-message-box1`); // Get the second message box element
    if (el && el2) {
      // Check if both elements exist
      el.style.display = "none"; // Hide the first message box
      el2.style.display = "none"; // Hide the second message box
    }
  };

  return (
    <Paper elevation={3}>
      {" "}
      {/* Material-UI Paper component with elevation */}
      <div
        id={comp_id}
        onClick={() => displayMessage()} // Call displayMessage on click
        className="rounded bg-purple-700 text-center text-white max-w-content p-1 my-3"
      >
        Hide Message {/* Button text */}
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

export default connect(mapStateToProps)(HideMessage); // Connect the component to Redux store
