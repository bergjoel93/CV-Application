import { useState, useEffect } from "react";
import TextInput from "../../genericComponents/textInput";
import { RiDeleteBin6Line } from "@remixicon/react";
import Checkbox from "../../genericComponents/checkbox";

export default function AddExperience({
  experienceToEdit,
  onSave,
  onCancel,
  onDelete,
}) {
  const [formData, setFormData] = useState(
    experienceToEdit || {
      id: "",
      jobTitle: "",
      employer: "",
      department: "",
      startDate: "",
      present: false,
      endDate: "",
      jobDutiesList: [],
    }
  );
  const [formValid, setFormValid] = useState(false);

  function handleChange(e) {
    const property = e.target.id;
    let value = e.target.value;

    // Convert date string to Date object if the property is a date
    if (property === "startDate" || property === "endDate") {
      value = new Date(value);
    } else if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setFormData((prevData) => ({
      ...prevData,
      [property]: value,
    }));
  }

  function formatDate(date) {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
      return ""; // Return empty string for invalid or empty dates
    }
    return date.toISOString().split("T")[0];
  }

  function isFormValid() {
    // Ensure required fields are filled out
    return (
      formData.degree &&
      formData.college &&
      formData.gpa &&
      formData.startDate &&
      (!formData.present ? formData.endDate : true)
    );
  }

  useEffect(() => {
    // Update formValid state based on formData validity
    setFormValid(isFormValid());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]); // Re-run this effect whenever formData changes

  return (
    <>
      <h1 className="font-bold text-xl flex items-center justify-between gap-2 w-full">
        {experienceToEdit ? "Edit Experience" : "Add Experience"}
        {experienceToEdit && (
          <button
            className="text-xs bg-red-200 hover:bg-red-300 rounded-full p-2"
            onClick={() => {
              console.log("Delete button clicked");
              onDelete(experienceToEdit.id);
            }}
          >
            <RiDeleteBin6Line size="16" />
          </button>
        )}
      </h1>
      <TextInput
        type="text"
        label="Job Title"
        id="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
      />
      <TextInput
        type="text"
        label="Employer"
        id="employer"
        value={formData.employer}
        onChange={handleChange}
      />
      <TextInput
        type="text"
        label="Department"
        id="department"
        value={formData.department}
        onChange={handleChange}
      />
      <TextInput
        type="date"
        label="Start Date"
        id="startDate"
        value={formData.startDate ? formatDate(formData.startDate) : ""}
        onChange={handleChange}
      />
      <TextInput
        type="date"
        label="End Date"
        id="endDate"
        value={
          !formData.present && formData.endDate
            ? formatDate(formData.endDate)
            : ""
        }
        onChange={handleChange}
        disabled={formData.present}
      />
      <Checkbox
        label="Presently working?"
        id="present"
        checked={formData.present}
        onChange={handleChange}
      />
      <div className="flex w-full justify-center gap-3">
        <button
          className="text-black bg-slate-200 hover:bg-slate-400 rounded-full text-sm h-8 w-24 mt-2 mb-4 font-bold"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className={
            (formValid
              ? "text-white bg-sky-500 hover:bg-sky-700 "
              : "text-black bg-red-200") +
            " rounded-full text-sm h-8 w-24 mt-2 mb-4 font-bold"
          }
          onClick={() => {
            console.log("save button clicked");
            onSave(formData);
          }}
          disabled={!formValid}
        >
          Save
        </button>
      </div>
    </>
  );
}
