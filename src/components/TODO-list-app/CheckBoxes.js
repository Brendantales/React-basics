import React from "react";
import "../../style.css";

function CheckBoxes() {
  return (
    <div>
      <input type="checkbox" id="gender" name="gender" value="Male" />
      <label className="samplecolor"> Male </label> <br />
      <input
        type="checkbox"
        id="onlinePlayer"
        name="onlinePlayer"
        value="onlineGamer"
      />
      <label className="samplecolor">Online player</label>
    </div>
  );
}

export default CheckBoxes;
