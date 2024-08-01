import EducationCard from "./educationCard";
import { useState } from "react";
import AddEducation from "./addEducation";
// User will click on card. It expands showing the Education cards and an add education button. Add logic so that if Add education button is clicked the Add education form will replace all of the components.
export default function Education() {
  const [addEducation, setAddEducation] = useState(false); // add new state
  const [editEducation, setEditEducation] = useState(null); // edit state
  const [educationList, setEducationList] = useState([
    {
      id: 0,
      degree: "A.S. Computer Science",
      college: "Salt Lake Community College",
      gpa: "3.96",
      startDate: "January 2021",
      endDate: "December 2023",
    },
    {
      id: 1,
      degree: "B.S. Environmental Science",
      college: "Westminster University",
      gpa: "3.64",
      startDate: "August 2012",
      endDate: "June 2016",
    },
  ]); // education list state

  function handleAddEducation() {
    setAddEducation(true);
    setEditEducation(null);
  }

  function handleEditEducation(id) {
    const educationToEdit = educationList.find((edu) => edu.id === id); //find the education object that we will edit.
    setEditEducation(educationToEdit); // set the education edit state.
    setAddEducation(true); // activate edit state.
  }

  function handleSave(newEducation) {
    if (editEducation) {
      // if education edit state is active (not null)
      setEducationList(
        // set the new education list, updating the object edited.
        educationList.map((edu) =>
          edu.id === editEducation.id ? { ...newEducation, id: edu.id } : edu
        )
      );
    } else {
      setEducationList([
        ...educationList,
        { ...newEducation, id: getMaxId() + 1 },
      ]);
    }
    setAddEducation(false);
    setEditEducation(null);
  }

  function handleCancel() {
    setAddEducation(false);
    setEditEducation(null);
  }

  function handleDelete(id) {
    setEducationList(educationList.filter((edu) => edu.id !== id));
    setAddEducation(false);
    setEditEducation(null);
  }

  function getMaxId() {
    return educationList.length
      ? Math.max(...educationList.map((edu) => edu.id))
      : 0;
  }

  return (
    <div className="flex justify-center gap-4 flex-col items-center m-4">
      {addEducation ? (
        <AddEducation
          onSave={handleSave}
          onCancel={handleCancel}
          onDelete={handleDelete}
          education={editEducation}
        />
      ) : (
        <>
          {educationList.map((edu) => (
            <EducationCard
              key={edu.id}
              {...edu}
              onClick={() => handleEditEducation(edu.id)}
            />
          ))}
          <button
            className="text-white bg-sky-500 hover:bg-sky-700 rounded-full text-sm w-40 h-8 mt-2 mb-4 font-bold"
            onClick={handleAddEducation}
          >
            Add Education
          </button>
        </>
      )}
    </div>
  );
}
