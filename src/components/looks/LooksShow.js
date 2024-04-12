import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const Show = ({ character, comp_id }) => {
  // Function to handle the display of the component
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    el.style.display = "inline-block"; // Set the display style to inline-block
  };

  return (
    <Paper elevation={3}>
      {" "}
      {/* Material-UI Paper component with elevation */}
      <div
        id={comp_id}
        className="rounded text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer mx-auto"
        onClick={() => handleDisplay()} // Call handleDisplay on click
      >
        Show {/* Button text */}
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

export default connect(mapStateToProps)(Show); // Connect the component to Redux store
