import React from "react";
import Move from "./motion/Move";
import TurnAntiClockwise from "./motion/MotionTurnAntiClockwise";
import TurnClockwise from "./motion/MotionTurnClockwise";
import GotoXY from "./motion/MotionGoto";
import SayMessage from "./looks/LooksSayMessage";
import SayMessageWithTimer from "./looks/LooksSayMessageWithTimer";
import Size from "./looks/LooksSize";
import Show from "./looks/LooksShow";
import Hide from "./looks/LooksHide";
import Wait from "./control/ControlWait";
import Repeat from "./control/ControlRepeat";
import HideMessage from "./looks/LooksHideMessage";
import MoveY from "./motion/MotionMoveY";
import BroadcastMessage from "./events/EventBroadcast";
import Think from "./looks/LooksThink";
import ThinkWithTimer from "./looks/LooksThinkWithTimer";

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
