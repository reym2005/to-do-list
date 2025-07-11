import "./ToggleSwitch.css";
import { useState } from "react";
export const ToggleSwtich = () =>
{
    const [isOn,setIsOn] =useState(false);
    const handleToggle =() =>
    {
       setIsOn(!isOn);
    }
    
    return(
        <div className="toggle-switch" style={{ backgroundColor: isOn ? "#4caf50" : "#ccc" }} onClick={handleToggle}>
            <div className={`switch ${isOn ? "on" : "off"}`}>
                <span className="switch-state">
                    {isOn ? "On" : "Off"}
                </span>
            </div>
        </div>
    )
}