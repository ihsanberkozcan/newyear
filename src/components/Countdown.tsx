type CountdownProps = {
  countdown: string | number;
  text: string;
};

function Countdown({ countdown, text }: CountdownProps) {
  return (
    <div className="countdown">
      <p className="text">{countdown}</p>
      <span>{text}</span>
    </div>
  );
}

export default Countdown;
