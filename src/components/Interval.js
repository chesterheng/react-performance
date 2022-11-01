import useInterval from "use-interval";

function Interval({ onInterval, interval }) {
  useInterval(onInterval, interval);
  return null;
}

export default Interval;
