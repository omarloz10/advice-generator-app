
import ReactDOM from "react-dom/client";
import "./index.css";
import Advice from "./components/Advice";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <main className="min-h-screen  bg-DarkBlue flex justify-center items-center">
    <Advice></Advice>
  </main>
);
