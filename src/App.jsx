import "./App.css";
import MyBalance from "./assets/components/MyBalance";
import Summary from "./assets/components/Summary";

function App() {
  return (
    <main className="min-w-full h-full flex flex-col justify-center items-center">
      <MyBalance />
      <Summary />
    </main>
  );
}
export default App;