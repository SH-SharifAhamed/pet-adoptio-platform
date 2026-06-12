import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center text-center my-10 py-20">
      <PulseLoader color="#36d7b7" />
    </div>
  );
}
