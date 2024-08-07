import TextInput from "../../../components/genericComponents/textInput";
import { RiDeleteBin6Line } from "@remixicon/react";
import Checkbox from "../../../components/genericComponents/checkbox";
import { useState, useEffect } from "react";
export default function AddEducation({
  onSave,
  onCancel,
  onDelete,
  education,
}) {
  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [gpa, setGpa] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [present, setPresent] = useState(false);

  useEffect(() => {
    if (education) {
      setDegree(education.degree);
      setCollege(education.college);
      setGpa(education.gpa);
      setStartDate(education.startDate);
      setEndDate(education.endDate === "Present" ? "" : education.endDate);
      setPresent(education.endDate === "Present");
    }
  }, [education]);

  const handleSubmit = () => {
    onSave({
      degree,
      college,
      gpa,
      startDate,
      endDate: present ? "Present" : endDate,
    });
  };

  return (
    <>
      <h1 className="font-bold text-xl flex items-center justify-between gap-2 w-full">
        {education ? "Edit Education" : "Add Education"}
        {education && (
          <button
            className="text-xs bg-red-200 hover:bg-red-300 rounded-full p-2"
            onClick={() => onDelete(education.id)}
          >
            <RiDeleteBin6Line size="16" />
          </button>
        )}
      </h1>
      <TextInput
        type="text"
        label="Degree"
        id="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        required
      />
      <TextInput
        type="text"
        label="College"
        id="college"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        required
      />
      <TextInput
        type="text"
        label="GPA"
        id="gpa"
        pattern="^\d*(\.\d{1,2})?$"
        inputMode="decimal"
        title="Please enter a valid GPA (e.g., 3.96)"
        value={gpa}
        onChange={(e) => setGpa(e.target.value)}
        required
      />
      <TextInput
        type="date"
        label="Start Date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <TextInput
        type="date"
        label="End Date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        disabled={present}
      />
      <Checkbox
        label="Still Attending?"
        id="present"
        checked={present}
        onChange={() => setPresent(!present)}
      />
      <div className="flex w-full justify-center gap-3">
        <button
          className="text-black bg-slate-200 hover:bg-slate-400 rounded-full text-sm h-8 w-24 mt-2 mb-4 font-bold"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="text-white bg-sky-500 hover:bg-sky-700 rounded-full text-sm h-8 w-24 mt-2 mb-4 font-bold"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </>
  );
}
