import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, handleClick, customStyles }) => {
  const snap = useSnapshot(state);

  const generateStyle = () => {
    if (type === "filled")
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    else if (type === "outline")
      return { borderWidth: "1px", borderColor: snap.color, color: snap.color };
  };
  return (
    <button
      className={`rounded-md flex-1 ${customStyles}`}
      onClick={handleClick}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
};

export default CustomButton;
