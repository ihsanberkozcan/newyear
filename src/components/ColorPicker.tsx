import { useState, useRef } from "react";
import { GithubPicker } from "react-color";
import { useOnClickOutside } from "../hooks/hooks";
import { useDispatch, useSelector } from "react-redux";
import { updateColor } from "../stores/color";


interface RootState {
  color: {
    background: string;
  };
}

function ColorPicker() {
  const dispatch = useDispatch();
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);

  const color = useSelector((state: RootState) => state.color);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  useOnClickOutside(ref, () => handleClick());

  const handleChangeComplete = (color: { hex: string }) => {
    dispatch(updateColor(color.hex ));
  };
  return (
    <div className="colorPickerButton">
      <button onClick={handleClick} className="changeColorButton">
        Change Color
      </button>
      {displayColorPicker ? (
        <div ref={ref}>
          <GithubPicker
            color={color.background}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ColorPicker;
