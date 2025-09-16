import { useRef, useState } from "react";
import Draggable from "react-draggable";

function Text() {
  const nodeRef = useRef(null);
  const [editMode,setEditMode] = useState(false);
  const [val,setVal] = useState("Double Click to Edit");

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} >
        { editMode ? ( 
          <input value={val} onDoubleClick={e => setEditMode(false)} onChange={e => setVal(e.target.value)} /> 
        ) : (
          <h1 onDoubleClick={e => setEditMode(true)} >{val}</h1>
        )}
      </div>
    </Draggable>
  );
}

export default Text;
