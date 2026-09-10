import LandingPage from "./frames/LandingPage";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f8f8f7",
      }}
    >
      <LandingPage onEnterApp={() => {}} />
    </div>
  );
}
