import React from "react"

function CheckBoxes() {
    return(
        <div>
            <input type="checkbox" id="gender" name="gender"  value="Male"/>
            <label> Male </label> <br/>
            <input type="checkbox" id="onlinePlayer" name="onlinePlayer" value="onlineGamer"/>
            <label> Online player</label>
        </div>
    )
}

export default CheckBoxes