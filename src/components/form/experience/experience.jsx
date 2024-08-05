import { ExperienceCard } from "../accordianCard";
import { useState } from "react";
import AddExperience from "./addExperience";

export default function Experience() {
  const [editOrAdd, setEditOrAdd] = useState({
    openForm: false,
    experienceToEdit: null,
  });
  const [experienceList, setExperienceList] = useState([
    {
      id: 0,
      jobTitle: "Computer Lab Aid",
      employer: "Salt Lake Community College",
      department: "Information Technology",
      startDate: new Date("2023-08-05"),
      present: true,
      endDate: null,
      jobDutiesList: [
        "Provide technical support for students and staff as help-desk technical support.",
        "Utilize ServiceNow to create and maintain help-desk incidents.",
        "Diagnose and maintain hardware and software issues.",
        "Provide technical support for printers, WIFI authentication, and various computer applications. ",
      ],
    },
    {
      id: 2,
      jobTitle: "Learning Assistant for Mathematics",
      employer: "Salt Lake Community College",
      department: "Mathematics Department",
      startDate: new Date("2023-08-05"),
      present: true,
      endDate: null,
      jobDutiesList: [
        "Tutor and mentor students in a math class that I also attend with them.",
        "Provide one-on-one tutoring with students. ",
        "Host group study-sessions during the end of semester.",
        "Coordinates and conducts training sessions once a week.",
      ],
    },
    {
      id: 3,
      jobTitle: "Environmental Health Scientist",
      employer: "Salt Lake County Health Department",
      department: "Environmental Health",
      startDate: new Date("2017-04-14"),
      present: false,
      endDate: new Date("2023-05-17"),
      jobDutiesList: [
        "Conducted around 300 routine health inspections per year for food establishments.",
        "Reviewed plans for new food establishments and conducted onsite inspections for approval. ",
        "Coordinated and conducted foodborne illness investigations. ",
        "Conducted health inspections for temporary mass gatherings.",
        "Provided food safety consultations and education.",
        "Created reports based on local food regulation.",
      ],
    },
  ]);
  function handleClick(id = null) {
    //if id is not null then it's an edit.
    if (id !== null) {
      // Update the state
      setEditOrAdd((prevState) => ({
        ...prevState, // Spread the previous state
        openForm: true, // Update 'edit' to true
        experienceToEdit: experienceList.find((item) => item.id === id),
      }));
    } else {
      setEditOrAdd((prevState) => ({
        ...prevState,
        openForm: true,
        experienceToEdit: null,
      }));
    }
  }

  function handleSave(newExperience) {
    if (editOrAdd.experienceToEdit) {
      // If we're editing an existing experience object
      const newExperienceList = experienceList.map((experience) => {
        if (experience.id === newExperience.id) {
          // Update the experience object with new data
          return { ...experience, ...newExperience };
        }
        return experience; // Return unchanged experience objects
      });

      // Update the state with the new list
      setExperienceList(newExperienceList);
    } else {
      // If we're adding a new experience object
      const highestId = getMaxId();
      const newId = highestId + 1;

      const experienceWithId = { ...newExperience, id: newId };

      // Update the state with the new experience item
      setExperienceList([...experienceList, experienceWithId]);
    }

    // Reset form and other states
    resetEditOrAdd();
    console.log(experienceList);
  }

  function getMaxId() {
    return experienceList.length
      ? Math.max(...experienceList.map((edu) => edu.id))
      : 0;
  }

  function resetEditOrAdd() {
    setEditOrAdd({
      openForm: false,
      experienceToEdit: null,
    });
  }

  return (
    <div className="flex justify-center gap-4 flex-col items-center m-4 ">
      {editOrAdd.openForm ? (
        <>
          <AddExperience></AddExperience>
        </>
      ) : (
        <>
          {experienceList.map((experience) => (
            <ExperienceCard
              key={experience.id}
              {...experience}
              onClick={() => handleClick(experience.id)}
            ></ExperienceCard>
          ))}
        </>
      )}
      {!editOrAdd.openForm && (
        <>
          <button
            className="text-white bg-sky-500 hover:bg-sky-700 rounded-full text-sm w-40 h-8 mt-2 mb-4 font-bold"
            onClick={handleClick}
          >
            Add Experience
          </button>
        </>
      )}
    </div>
  );
}
