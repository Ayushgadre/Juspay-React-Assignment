import React from "react";
import { connect } from "react-redux"; // Importing connect from react-redux
import Paper from "@material-ui/core/Paper"; // Importing Paper component from Material-UI

// Define the Hide component that takes character and comp_id as props
const Hide = ({ character }) => {
  // Function to handle hiding the component
  const handleDisplay = () => {
    const el = document.getElementById(character.active); // Get the element by ID using the active property from character
    if (el) {
      // Check if the element exists
      el.style.display = "none"; // Set the display property to "none" to hide the element
    }
  };

  return (
    <Paper elevation={3}>
      {" "}
      {/* Material-UI Paper component with elevation */}
      <div
        className="text-center rounded bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer mx-auto"
        onClick={handleDisplay} // Call handleDisplay function when clicked
      >
        Hide {/* Button text */}
      </div>
    </Paper>
  );
};

// Mapping state to props to access character from Redux state
const mapStateToProps = (state) => ({
  character: state.character, // Accessing character from Redux state
});

export default connect(mapStateToProps)(Hide); // Connecting the component to Redux store and exporting it
