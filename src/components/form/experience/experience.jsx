import { ExperienceCard } from "../accordianCard";
import { useState } from "react";
import AddExperience from "./addExperience";

export default function Experience({
  experienceList,
  editOrAdd,
  onClick,
  onSave,
  onDelete,
  onCancel,
}) {
  return (
    <div className="flex justify-center gap-4 flex-col items-center m-4 ">
      {editOrAdd.openForm ? (
        <>
          <AddExperience
            experienceList={experienceList}
            experienceToEdit={editOrAdd.formToEdit}
            onSave={onSave}
            onCancel={onCancel}
            onDelete={onDelete}
          ></AddExperience>
        </>
      ) : (
        <>
          {experienceList.map((experience) => (
            <ExperienceCard
              key={experience.id}
              {...experience}
              onClick={() => onClick(experience.id, experienceList)}
            ></ExperienceCard>
          ))}
        </>
      )}
      {!editOrAdd.openForm && (
        <>
          <button
            className="text-white bg-sky-500 hover:bg-sky-700 rounded-full text-sm w-40 h-8 mt-2 mb-4 font-bold"
            onClick={() => onClick(null, experienceList)}
          >
            Add Experience
          </button>
        </>
      )}
    </div>
  );
}
