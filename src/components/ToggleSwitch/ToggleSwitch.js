import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span><img style={{
        position: "absolute",
        marginLeft: "-17px",
        width: "20px"
      }} alt="check" src={isChecked ? require("../../assets/images/sun.svg"): require("../../assets/images/moon.svg")}>

      </img>

      </span>
    </label>
  );
};
export default ToggleSwitch;
