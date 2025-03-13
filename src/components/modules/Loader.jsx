import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <RotatingLines
      width="50px"
      height="50px"
      strokeWidth="2"
      strokeColor="#3874ff"
    />
  );
}

export default Loader;
