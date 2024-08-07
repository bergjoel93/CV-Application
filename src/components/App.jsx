import "./styles//App.css";
import Accordian from "./form/accordian";
import Preview from "./preview/preview";
import Header from "./header/header";
import MainInfoForm from "./form/mainInfo/mainInfoForm";
import Education from "./form/education/education";
import Experience from "./form/experience/experience";
import { mainInformation, expList, eduList } from "../defaultData/Lists";
import { useState } from "react";

function App() {
  // To see the default lists go to src -> defaultData -> Lists.jsx
  /** Main Info State */
  const [mainInfo, setMainInfo] = useState(mainInformation);
  /** Experience state */
  const [experienceList, setExperienceList] = useState(expList);

  /** Education State  */
  const [educationList, setEducationList] = useState(eduList);
  const [editOrAdd, setEditOrAdd] = useState({
    openForm: false,
    formToEdit: null,
  });

  function updateMainInfo(e) {
    setMainInfo({ ...mainInfo, [e.target.id]: e.target.value });
  }

  function handleClick(id = null, list) {
    //if id is not null then it's an edit.
    if (id !== null) {
      // Update the state
      setEditOrAdd((prevState) => ({
        ...prevState, // Spread the previous state
        openForm: true, // Update 'edit' to true
        formToEdit: list.find((item) => item.id === id),
      }));
    } else {
      setEditOrAdd((prevState) => ({
        ...prevState,
        openForm: true,
        formToEdit: null,
      }));
    }
  }

  // When the save button on the education form is clicked this will first look to see if it's an edit or if it's a new education object being added to the list.
  function handleSave(newObject, list, option) {
    if (editOrAdd.formToEdit) {
      // If we're editing an existing education object
      const newList = list.map((item) => {
        if (item.id === newObject.id) {
          // Update the education object with new data
          return { ...item, ...newObject };
        }
        return item; // Return unchanged education objects
      });

      // Update the state with the new list
      if (option === "education") {
        setEducationList(newList);
      }
      if (option === "experience") {
        setExperienceList(newList);
      }
    } else {
      // If we're adding a new education object
      const highestId = getMaxId(list);
      const newId = highestId + 1;

      const objectWithId = { ...newObject, id: newId };

      // Update the state with the new education item
      if (option === "education") {
        setEducationList([...educationList, objectWithId]);
      } else if (option === "experience") {
        setExperienceList([...educationList, objectWithId]);
      }
    }
    // Reset form and other states
    resetEditOrAdd();
  }

  function handleDelete(id, option) {
    if (option === "education") {
      setEducationList((prevList) => prevList.filter((item) => item.id !== id));
    } else if (option === "experience") {
      setExperienceList((prevList) =>
        prevList.filter((item) => item.id !== id)
      );
    }
    resetEditOrAdd();
  }

  function getMaxId(list) {
    return list.length ? Math.max(...list.map((item) => item.id)) : 0;
  }

  function resetEditOrAdd() {
    setEditOrAdd({
      openForm: false,
      formToEdit: null,
    });
  }

  return (
    <>
      <Header />
      <main className="flex flex-wrap justify-around ">
        <Accordian>
          <MainInfoForm
            info={mainInfo}
            onChange={updateMainInfo}
          ></MainInfoForm>
          <Education
            educationList={educationList}
            editOrAdd={editOrAdd}
            onClick={handleClick}
            onSave={handleSave}
            onDelete={handleDelete}
            onCancel={resetEditOrAdd}
          ></Education>
          <Experience
            experienceList={experienceList}
            editOrAdd={editOrAdd}
            onClick={handleClick}
            onSave={handleSave}
            onDelete={handleDelete}
            onCancel={resetEditOrAdd}
          ></Experience>
        </Accordian>
        <Preview
          mainInfo={mainInfo}
          educationList={educationList}
          experienceList={experienceList}
        ></Preview>
      </main>
    </>
  );
}

export default App;
