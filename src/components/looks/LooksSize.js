import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const Size = ({ character, comp_id }) => {
  // State to manage the scale of the component
  const [state, setState] = useState({
    scale: 1,
  });

  // Function to change the size of the component
  const changeSize = () => {
    const el = document.getElementById(character.active);
    el.style.transform = `scale(${state.scale})`; // Set the scale using CSS transform property
  };

  return (
    <Paper elevation={3}>
      {" "}
      {/* Material-UI Paper component with elevation */}
      <div className="text-center rounded bg-purple-500 p-2 my-3">
        {" "}
        {/* Container div */}
        <div className="grid grid-cols-2 my-2">
          {" "}
          {/* Grid layout */}
          <div className="text-white"> Size:</div> {/* Label */}
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.scale}
            onChange={(e) =>
              setState({ ...state, scale: parseInt(e.target.value) })
            } // Update the scale state on input change
          />
        </div>
        <div
          id={comp_id}
          className="text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => changeSize()} // Call changeSize function on click
        >
          Size {state.scale} {/* Display the current scale */}
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

export default connect(mapStateToProps)(Size); // Connect the component to Redux store
