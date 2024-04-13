import React, { useState } from "react";
import { connect } from "react-redux";
import { setCharacterAngle } from "../../redux/Reduxcharacter/CharacterActions";
import RedoIcon from "@material-ui/icons/Redo";
import Paper from "@material-ui/core/Paper";

// TurnClockWise Component for rotating the character clockwise
const TurnClockWise = ({ character, characterAngle, comp_id }) => {
  // State to manage the angle of rotation
  const [angle, setAngle] = useState(0);

  // Function to handle clockwise rotation
  const handleClick = () => {
    const el = document.getElementById(character.active); // Get the active character element
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    ); // Find the character's current angle
    if (character_angle) {
      el.style.transform = `rotate(${character_angle.angle + angle}deg)`; // Apply clockwise rotation
      characterAngle(character_angle.angle + angle); // Update Redux state with new angle
    }
  };

  return (
    <Paper elevation={3}>
      <div className="text-center rounded bg-blue-500 p-2 my-3">
        <div className="grid grid-cols-2">
          <div className="text-white">Rotate By:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))} // Update angle on input change
          />
        </div>
        <div
          id={comp_id}
          className={`flex bg-blue-700 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer text-center`}
          onClick={() => handleClick()} // Call handleClick function on click
        >
          <div className="flex mx-auto">
            Turn
            <RedoIcon className="mx-2" /> {angle} Degrees
          </div>
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

// Mapping Redux actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    characterAngle: (angle) => dispatch(setCharacterAngle(angle)), // Dispatching action to update character angle
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnClockWise); // Connect the component to Redux store
