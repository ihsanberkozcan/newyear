import { useState, useRef } from "react";
import { GithubPicker } from "react-color";
import { useOnClickOutside } from "../hooks/hooks";

type ColorPickerProps = {
  color: {
    background: string;
  };
  handleChangeComplete: (color: { hex: string }) => void;
};

function ColorPicker({ color, handleChangeComplete }: ColorPickerProps) {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  useOnClickOutside(ref, () => handleClick());
  return (
    <div className="colorPickerButton">
      <button onClick={handleClick} className="changeColorButton">
        Change color
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
