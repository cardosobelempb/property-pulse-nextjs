import ClipLoader from "react-spinners/ClipLoader";
const override = {
  display: "block",
  margin: "100px auto",
};
export default function LoadingPage() {
  return (
    <ClipLoader
      cssOverride={override}
      className="m-auto mt-20"
      size={150}
      color={"#3B82F6"}
      aria-label="Loading Spinner"
    />
  );
}
