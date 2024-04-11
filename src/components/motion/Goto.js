import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const GotoXY = ({ character, comp_id }) => {
  // State to manage the X and Y coordinates for positioning
  const [state, setState] = useState({
    goto_x: 0,
    goto_y: 0,
  });

  // Function to move to the specified X and Y coordinates
  const gotoXY = () => {
    const el = document.getElementById(`${character.active}-div`);
    el.style.position = "relative";
    el.style.left = state.goto_x + "px";
    el.style.top = state.goto_y + "px";
  };

  return (
    <Paper elevation={3}>
      {" "}
      {/* Material-UI Paper component with elevation */}
      <div className="text-center rounded bg-blue-500 p-2 my-3">
        {" "}
        {/* Container div */}
        <div className="grid grid-cols-2 my-2">
          {" "}
          {/* Grid layout for X input */}
          <div className="text-white"> X</div> {/* Label for X input */}
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.goto_x}
            onChange={(e) => {
              parseInt(e.target.value) !== 0 &&
                setState({ ...state, goto_x: parseInt(e.target.value) });
            }} // Update X coordinate on input change
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          {" "}
          {/* Grid layout for Y input */}
          <div className="text-white">Y</div> {/* Label for Y input */}
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.goto_y}
            onChange={(e) => {
              parseInt(e.target.value) !== 0 &&
                setState({ ...state, goto_y: parseInt(e.target.value) });
            }} // Update Y coordinate on input change
          />
        </div>
        <div
          id={comp_id}
          className="text-center bg-blue-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => gotoXY()} // Call gotoXY function on click
        >
          Go to X : {state.goto_x} Y : {state.goto_y}{" "}
          {/* Display current X and Y coordinates */}
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

export default connect(mapStateToProps)(GotoXY); // Connect the component to Redux store
