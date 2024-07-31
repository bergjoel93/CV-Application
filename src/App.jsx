import "./App.css";
import FormCard from "./modules/formCard/formCard";
import MainInfo from "./modules/formComponents/mainInfo";
import FormContainer from "./modules/formContainer/formContainer";
import Preview from "./modules/preview/preview";

function App() {
  return (
    <>
      <main className="flex flex-wrap justify-around flex-1">
        <FormContainer></FormContainer>
        <Preview></Preview>
      </main>
    </>
  );
}

export default App;
