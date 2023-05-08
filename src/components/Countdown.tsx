import { useTranslation } from "react-i18next";

type CountdownProps = {
  countdown: string | number;
  text: string;
};

function Countdown({ countdown, text }: CountdownProps) {
  const { t } = useTranslation();
  return (
    <div className="countdown">
      <p className="text">{countdown}</p>
      <span className="smallText">{t(text)}</span>
    </div>
  );
}

export default Countdown;
