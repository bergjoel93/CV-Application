import "./styles//App.css";
import Accordian from "./form/accordian";
import Preview from "./preview/preview";
import Header from "./header/header";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-wrap justify-around flex-1">
        <Accordian></Accordian>
        <Preview></Preview>
      </main>
    </>
  );
}

export default App;
