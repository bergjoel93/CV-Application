import { useState } from "react";
import { EducationCard } from "../accordianCard";
import AddEducation from "./addEducationForm";
/**
 * This component is an accordian filled with 'education cards' that, when clicked, open up an editable view.
 * @returns
 */
export default function Education() {
  const [editOrAdd, setEditOrAdd] = useState({
    openForm: false,
    educationToEdit: null,
  });
  const [educationList, setEducationList] = useState([
    // educationList state.
    {
      // default education
      id: 0,
      degree: "A.S. Computer Science",
      college: "Salt Lake Community College",
      gpa: "3.96",
      startDate: new Date("2021-08-05"),
      present: false,
      endDate: new Date("2023-12-05"),
    },
    {
      id: 1,
      degree: "B.S. Environmental Science",
      college: "Westminster University",
      gpa: "3.64",
      startDate: new Date("2012-08-05"),
      present: false,
      endDate: new Date("2016-06-05"),
    },
  ]); // education list state

  // We need a handler function to handle the logic. If we click on an education card, then we will open the edit form and pass the rendered data into the form. Clicking the "Save" button will update the education list.  If we click the "Add Education" button, then we'll open a blank form.
  function handleClick(id = null) {
    //if id is not null then it's an edit.
    if (id !== null) {
      // Update the state
      setEditOrAdd((prevState) => ({
        ...prevState, // Spread the previous state
        openForm: true, // Update 'edit' to true
        educationToEdit: educationList.find((item) => item.id === id),
      }));
    } else {
      setEditOrAdd((prevState) => ({
        ...prevState,
        openForm: true,
        educationToEdit: null,
      }));
    }
  }
  // When the save button on the education form is clicked this will first look to see if it's an edit or if it's a new education object being added to the list.
  function handleSave(newEducation) {
    if (editOrAdd.educationToEdit) {
      // If we're editing an existing education object
      const newEducationList = educationList.map((education) => {
        if (education.id === newEducation.id) {
          // Update the education object with new data
          return { ...education, ...newEducation };
        }
        return education; // Return unchanged education objects
      });

      // Update the state with the new list
      setEducationList(newEducationList);
    } else {
      // If we're adding a new education object
      const highestId = getMaxId();
      const newId = highestId + 1;

      const educationWithId = { ...newEducation, id: newId };

      // Update the state with the new education item
      setEducationList([...educationList, educationWithId]);
    }

    // Reset form and other states
    resetEditOrAdd();
    console.log(educationList);
  }

  function handleDelete(id) {
    setEducationList((prevList) => prevList.filter((item) => item.id !== id));
    resetEditOrAdd();
  }

  function getMaxId() {
    return educationList.length
      ? Math.max(...educationList.map((edu) => edu.id))
      : 0;
  }

  function resetEditOrAdd() {
    setEditOrAdd({
      openForm: false,
      educationToEdit: null,
    });
  }
  // loop through educationList and render the cards.
  return (
    <div className="flex justify-center gap-4 flex-col items-center m-4">
      {/* Education add/edit Form */}
      {editOrAdd.openForm ? (
        <>
          <AddEducation
            educationToEdit={editOrAdd.educationToEdit}
            onSave={handleSave}
            onCancel={resetEditOrAdd}
            onDelete={handleDelete}
          ></AddEducation>
        </>
      ) : (
        <>
          {educationList.map((edu) => (
            <EducationCard
              key={edu.id}
              {...edu}
              onClick={() => handleClick(edu.id)}
            ></EducationCard>
          ))}
        </>
      )}
      {/* We need a state for if we're in the form more or education card mode. and if we're in edit mode or we're in add mode.  */}
      {/* Education Card */}

      {/* Add new Education Button Conditional*/}
      {!editOrAdd.openForm && (
        <>
          <button
            className="text-white bg-sky-500 hover:bg-sky-700 rounded-full text-sm w-40 h-8 mt-2 mb-4 font-bold"
            onClick={handleClick}
          >
            Add Education
          </button>
        </>
      )}
    </div>
  );
}
