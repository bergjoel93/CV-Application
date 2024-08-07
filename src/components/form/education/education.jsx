import { useState } from "react";
import { EducationCard } from "../accordianCard";
import AddEducation from "./addEducationForm";
/**
 * This component is an accordian filled with 'education cards' that, when clicked, open up an editable view.
 * @returns
 */
export default function Education({
  educationList,
  editOrAdd,
  onClick,
  onSave,
  onDelete,
  onCancel,
}) {
  return (
    <div className="flex justify-center gap-4 flex-col items-center m-4">
      {/* Education add/edit Form */}
      {editOrAdd.openForm ? (
        <>
          <AddEducation
            educationList={educationList}
            educationToEdit={editOrAdd.formToEdit}
            onSave={onSave}
            onCancel={onCancel}
            onDelete={onDelete}
          ></AddEducation>
        </>
      ) : (
        <>
          {educationList.map((edu) => (
            <EducationCard
              key={edu.id}
              {...edu}
              onClick={() => onClick(edu.id, educationList)}
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
            onClick={() => onClick(null, educationList)}
          >
            Add Education
          </button>
        </>
      )}
    </div>
  );
}
