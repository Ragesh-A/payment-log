import Header from "./components/Header";
import LineGraph from "./components/LineGraph";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className="">
      <main className="min-h-screen flex">
      <SideBar />
      <div className="">
        <Header />
        <LineGraph />
      </div>
    </main>
    </main>
  );
}

export default App;
