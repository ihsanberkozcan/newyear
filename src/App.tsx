import { useEffect, useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown";
import ColorPicker from "./components/ColorPicker";
import { formatTime } from "./utils/formatTime";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Languages from "./components/Languages";
interface colorType {
  color: {
    background: string;
  };
}

type RootState = {
  color: colorType;
};
function App() {
  const { t } = useTranslation();
  const [day, setDay] = useState<string | number>(0);
  const [hour, setHour] = useState<string | number>(0);
  const [minute, setMinute] = useState<string | number>(0);
  const [second, setSecond] = useState<string | number>(0);

  const { color } = useSelector((state: RootState) => state.color);

  const year = new Date().getFullYear() + 1;
  const newYears = "1 Jan" + year;

  useEffect(() => {
    const interval = setInterval(() => {
      countDown();
    }, 1000);
    return () => clearInterval(interval);
  });

  const countDown = () => {
    const newYearsDate: Date = new Date(newYears);
    const currentDate: Date = new Date();

    const totalSecond: number =
      (newYearsDate.getTime() - currentDate.getTime()) / 1000;

    const days: number = Math.floor(totalSecond / (3600 * 24));
    const hours: string | number = formatTime(
      Math.floor(totalSecond / 3600) % 24
    );
    const minuts: string | number = formatTime(
      Math.floor(totalSecond / 60) % 60
    );
    const seconds: string | number = formatTime(Math.floor(totalSecond) % 60);

    setDay(days);
    setHour(hours);
    setMinute(minuts);
    setSecond(seconds);
  };
  return (
    <div className="App" style={{ background: color.background }}>
      <div className="header">
        <ColorPicker />
        <Languages />
      </div>

      <div className="content">
        <h1 className="title">{t("newYear")}</h1>
        <div className="container">
          <Countdown countdown={day} text="days" />
          <Countdown countdown={hour} text="hours" />
          <Countdown countdown={minute} text="minutes" />
          <Countdown countdown={second} text="seconds" />
        </div>
      </div>
    </div>
  );
}

export default App;
