import React, { useState } from "react";
import { connect } from "react-redux";
import { addList, deleteBlock } from "../redux/midarea/actions";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { purple } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// Styles for MaterialUI Components
const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: 0,
    },
  })
);

// Customized button for Running Lists
const RunButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    fontSize: "13px",
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

// Mid Area Component
function MidArea({
  area_list,
  add_list,
  event_values,
  set_active,
  delete_block,
}) {
  const [active, setActive] = useState(area_list.active);
  const classes = useStyles();

  // Function to handle running the list of components
  const handleClick = (arr, id) => {
    // Implementation logic for running the list
  };

  // Function to handle deleting a block
  const deleteHandler = (id) => {
    // Implementation logic for deleting a block
  };

  // Function to handle changing the active component
  const handleChange = (e) => {
    setActive(e.target.value);
    set_active(e.target.value);
  };

  return (
    <div className="flex-1 h-full overflow-auto p-3">
      {/* Component header */}
      <div className="flex justify-between">
        {/* Mid Area title */}
        <div className="font-bold mb-5 text-center border-2 rounded text-black p-2 w-auto">
          Middle Section
        </div>

        {/* Active component dropdown */}
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Select
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={active}
              onChange={(e) => handleChange(e)}
              displayEmpty
              className={classes.selectEmpty}
            >
              {area_list.midAreaLists.map((el) => (
                <MenuItem key={el.id} value={el.id}>
                  {el.id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Add Code Block button */}
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={() => add_list()}
          >
            Add Code Block
          </Button>
        </div>
      </div>

      {/* Grid of components */}
      <div className="grid grid-flow-col">
        {area_list.midAreaLists.map((l) => (
          <div className="h-screen" key={l.id}>
            {/* Render component only if active */}
            {active === l.id && (
              <Paper elevation={3} className="p-4 h-full ">
                <div className="h-full">
                  <Droppable droppableId={l.id} type="COMPONENTS">
                    {(provided) => (
                      <ul
                        className={`${l.id} `}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {/* Loop through components */}
                        {l.comps &&
                          l.comps.map((x, i) => {
                            let str = `${x}`;
                            let component_id = `comp${str}-${l.id}-${i}`;

                            return (
                              <Draggable
                                key={`${str}-${l.id}-${i}`}
                                draggableId={`${str}-${l.id}-${i}`}
                                index={i}
                              >
                                {(provided) => (
                                  <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {getComponent(str, component_id)}
                                    {provided.placeholder}
                                  </li>
                                )}
                              </Draggable>
                            );
                          })}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </div>
              </Paper>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Map state to props
const mapStateToProps = (state) => ({
  area_list: state.list,
  event_values: state.event,
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  add_list: () => dispatch(addList()),
  delete_block: (id) => dispatch(deleteBlock(id)),
  set_active: (id) => dispatch(setActive(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MidArea);
