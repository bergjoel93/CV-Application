import { useState, useEffect } from "react";
import TextInput from "../../genericComponents/textInput";
import { RiDeleteBin6Line } from "@remixicon/react";
import Checkbox from "../../genericComponents/checkbox";
import TextArea from "../../genericComponents/TextArea";

export default function AddExperience({
  experienceList,
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
      formData.jobTitle &&
      formData.employer &&
      formData.department &&
      formData.startDate &&
      (!formData.present ? formData.endDate : true) &&
      formData.jobDutiesList[0]
    );
  }

  useEffect(() => {
    // Update formValid state based on formData validity
    setFormValid(isFormValid());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]); // Re-run this effect whenever formData changes

  function updateJobDuty(e) {
    const index = e.target.id;
    const newValue = e.target.value;
    // get original list
    const oldList = formData.jobDutiesList;
    const newList = oldList.map((item, i) => (i === index ? newValue : item));

    setFormData((prevData) => {
      const updatedDuties = [...prevData.jobDutiesList];
      updatedDuties[index] = newValue;

      return {
        ...prevData,
        jobDutiesList: updatedDuties,
      };
    });
  }

  function deleteJobDuty(e) {
    const index = parseInt(e.currentTarget.getAttribute("data"), 10);
    console.log(index);
    // get the form data job duties list.
    const oldJobDutiesList = formData.jobDutiesList;
    // removes the job duty based off index.
    const newJobDutiesList = formData.jobDutiesList.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, jobDutiesList: newJobDutiesList });
  }

  function addJobDuty() {
    const newJobDutiesList = [...formData.jobDutiesList, ""];
    setFormData({ ...formData, jobDutiesList: newJobDutiesList });
  }

  // create new array, remove the desired index. update formdata.

  return (
    <>
      <h1 className="font-bold text-xl flex items-center justify-between gap-2 w-full">
        {experienceToEdit ? "Edit Experience" : "Add Experience"}
        {experienceToEdit && (
          <button
            className="text-xs bg-red-200 hover:bg-red-300 rounded-full p-2"
            onClick={() => {
              onDelete(experienceToEdit.id, "experience");
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
      {/* Job Duties List */}
      {formData.jobDutiesList.map((jobDuty, index) => (
        <div key={index} className=" w-full bg-slate-100 rounded-lg p-3">
          <div className="flex justify-between pb-1">
            <label htmlFor={index} className=" text-sm text-right">
              {"Job Duty #" + (index + 1) + ":"}
            </label>
            <button
              className="text-sm bg-red-200 hover:bg-red-300 rounded-full p-1"
              data={index}
              onClick={deleteJobDuty}
            >
              <RiDeleteBin6Line size="12" />
            </button>
          </div>

          <textarea
            className="  appearance-none border rounded w-full text-gray-700 p-3 text-sm outline-none focus:shadow-outline"
            name={"jobDuty" + index}
            id={index}
            value={jobDuty}
            onChange={updateJobDuty}
          />
        </div>
      ))}

      {/* Add job duty button */}
      <button
        className="text-black text-lg cursor-pointer  hover:scale-110 transition-transform"
        onClick={addJobDuty}
      >
        + Add Job Duty
      </button>
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
            onSave(formData, experienceList, "experience");
          }}
          disabled={!formValid}
        >
          Save
        </button>
      </div>
    </>
  );
}
