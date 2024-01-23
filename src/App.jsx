import "./App.css";
import DataContext from "./data/contextData"
import jsonData from "./data/data.json"
import MyBalance from "./assets/components/MyBalance";
import Graph from "./assets/components/GraphSection";
import Summary from "./assets/components/Summary";

function App() {

  return (
    <DataContext.Provider value={ jsonData }>
      <main className="min-w-full h-full flex flex-col justify-center items-center">
        <MyBalance />
        <Graph />
        <Summary />
      </main>
    </DataContext.Provider>
  );
}
export default App;