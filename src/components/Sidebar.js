import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} from "./SidebarConstants";

// Sidebar component to display different component categories
export default function Sidebar() {
  const [selection, setSelection] = useState("motion"); // State to manage active component category

  // Function to handle selection change
  function handler(selection) {
    setSelection(selection);
  }

  return (
    <>
      {/* Sidebar section */}
      <div className="w-20 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
        {/* Category buttons */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-1 px-2 rounded-full my-2"
          onClick={() => {
            handler("motion");
          }}
        >
          Motion
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-sm py-1 px-2 rounded-full my-2"
          onClick={() => {
            handler("look");
          }}
        >
          Looks
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-1 px-2 rounded-full my-2"
          onClick={() => {
            handler("control");
          }}
        >
          Control
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold text-sm py-1 px-2 rounded-full my-2"
          onClick={() => {
            handler("event");
          }}
        >
          Events
        </button>
      </div>

      {/* Component display area */}
      <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
        {/* Sidebar title */}
        <div className="font-bold mb-5 text-center border border-2 rounded text-black p-2 w-auto">
          Side Bar
        </div>

        {/* Render components based on selection */}
        {selection === "motion" ? (
          <>
            <div className="font-bold motion "> {"Motion"} </div>
            {/* Droppable area for Motion components */}
            <Droppable droppableId="sideArea-motion" type="COMPONENTS">
              {(provided) => (
                <ul
                  className="sideArea-motion my-3"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {/* Map through Motion components */}
                  {motionComponents.map((x, i) => {
                    return (
                      <Draggable
                        key={`${x}-sideArea`}
                        draggableId={`${x}-sideArea`}
                        index={i}
                      >
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="my-2"
                          >
                            {getComponent(x)}
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </>
        ) : null}

        {/* Repeat similar rendering logic for Looks, Control, and Events categories */}
      </div>
    </>
  );
}
