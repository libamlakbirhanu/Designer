import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";
import { setColor } from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        onChange={(color) => setColor(color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
