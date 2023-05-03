import { useState, useRef } from "react";
import { GithubPicker } from "react-color";
import { useOnClickOutside } from "../hooks/hooks";
import { useSelector } from "react-redux";

type ColorPickerProps = {
  handleChangeComplete: (color: { hex: string }) => void;
};
interface RootState {
  color: {
    background: string;
  };
}

function ColorPicker({ handleChangeComplete }: ColorPickerProps) {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);

  const color = useSelector((state: RootState) => state.color);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  useOnClickOutside(ref, () => handleClick());

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
