import React from "react";
import '../css/Widget.css'
import WidgetOptions from "./WidgetOptions";
function Widget() {
  return (
    <div className="widget">
        <div className="Widget_header">
         <h5>Spaces to follow</h5>
        </div>
        <div className="widget__contents">
        <WidgetOptions />
      </div>
    </div>
    
  );
}

export default Widget;