import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

// Move Component for Sidebar in Y direction
const MoveY = ({ character, comp_id }) => {
  // State to manage the number of steps to move in Y direction
  const [steps, setSteps] = useState(0);

  // Function to handle moving the component in Y direction
  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);
    const top = el.offsetTop; // Get the current top position

    el.style.position = "relative";
    el.style.top = top + steps + "px"; // Move by the specified number of steps
  };

  return (
    <Paper elevation={3}>
      {" "}
      {/* Material-UI Paper component with elevation */}
      <div
        id={comp_id}
        className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleClick()} // Call handleClick function on click
      >
        Move Y {/* Text label */}
        <input
          type="number"
          className="text-black text-center w-16 mx-2"
          value={steps}
          onChange={(e) => setSteps(parseInt(e.target.value))} // Update steps on input change
        />{" "}
        Steps {/* Text label */}
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

export default connect(mapStateToProps)(MoveY); // Connect the component to Redux store
