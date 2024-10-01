import React from "react";

export default function ContextMenu({menuPosition, setMenuPosition}) {
  if (!menuPosition.left) return
  return (
    <div className="context-menu" style={menuPosition}>
      <div onClick={() => {
        console.log("Editing");
        setMenuPosition({})
      }}>Edit</div>
      <div onClick={() => {
        console.log("Deleting");
        setMenuPosition({})
      }}>Delete</div>
    </div>
  );
}
