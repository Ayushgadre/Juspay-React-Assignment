import React from "react";
import Move from "./motion/Move";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import TurnClockwise from "./motion/TurnClockwise";
import GotoXY from "./motion/Goto";
import SayMessage from "./looks/SayMessage";
import SayMessageWithTimer from "./looks/SayMessageWithTimer";
import Size from "./looks/Size";
import Show from "./looks/Show";
import Hide from "./looks/Hide";
import Wait from "./control/Wait";
import Repeat from "./control/Repeat";
import HideMessage from "./looks/HideMessage";
import MoveY from "./motion/MoveY";
import BroadcastMessage from "./events/broadcast";
import Think from "./looks/Think";
import ThinkWithTimer from "./looks/ThinkWithTimer";

// Function to fetch components based on different keys
export const getComponent = (key, id) => {
  switch (key) {
    // Component for moving in the Y direction
    case "MOVE_Y":
      return <MoveY comp_id={id} />;
    // Component for moving
    case "MOVE":
      return <Move comp_id={id} />;
    // Component for turning clockwise
    case "TURN_CLOCKWISE":
      return <TurnClockwise comp_id={id} />;
    // Component for turning anti-clockwise
    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise comp_id={id} />;
    // Component for going to specific coordinates
    case "GOTO_XY":
      return <GotoXY comp_id={id} />;
    // Component for displaying a message
    case "SAY_MESSAGE":
      return <SayMessage comp_id={id} />;
    // Component for displaying a message with a timer
    case "SAY_MESSAGE_WITH_TIMER":
      return <SayMessageWithTimer comp_id={id} />;
    // Component for adjusting size
    case "SIZE":
      return <Size comp_id={id} />;
    // Component for showing an element
    case "SHOW":
      return <Show comp_id={id} />;
    // Component for hiding an element
    case "HIDE":
      return <Hide comp_id={id} />;
    // Component for broadcasting a message
    case "BROADCAST":
      return <BroadcastMessage comp_id={id} />;
    // Component for waiting
    case "WAIT":
      return <Wait comp_id={id} />;
    // Component for repeating actions
    case "REPEAT":
      return <Repeat comp_id={id} />;
    // Component for hiding a message
    case "HIDE_MESSAGE":
      return <HideMessage comp_id={id} />;
    // Component for thinking
    case "THINK":
      return <Think comp_id={id} />;
    // Component for thinking with a timer
    case "THINK_TIMER":
      return <ThinkWithTimer comp_id={id} />;
    // Default case, return null
    default:
      return null;
  }
};
