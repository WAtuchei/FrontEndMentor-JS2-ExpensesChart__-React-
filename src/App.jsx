import "./App.css";
import MyBalance from "./assets/components/MyBalance";
import Graph from "./assets/components/GraphSection";
import Summary from "./assets/components/Summary";

function App() {
  return (
    <main className="min-w-full h-full flex flex-col justify-center items-center">
      <MyBalance />
      <Graph />
      <Summary />
    </main>
  );
}
export default App;