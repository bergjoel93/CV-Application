import { RiArrowDownWideFill, RiArrowUpWideFill } from "@remixicon/react";
import { format } from "date-fns";
function Card({ children, title, isActive, onShow }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-blue-400 transition duration-300 eas-in-out p-4 mb-4 select-none ">
      <h2
        className=" text-xl font-semibold flex items-center justify-between cursor-pointer "
        onClick={onShow}
      >
        {title}
        {!isActive ? (
          <RiArrowDownWideFill size={24} />
        ) : (
          <RiArrowUpWideFill size={24} />
        )}
      </h2>
      {isActive && <div>{children}</div>}
    </div>
  );
}

// Function to format the date
// Function to format the date with validation
const formatDate = (date) => {
  if (date instanceof Date && !isNaN(date)) {
    return format(date, "MMMM d, yyyy");
  }
  return "Invalid date"; // Fallback text for invalid dates
};

function EducationCard({
  degree,
  college,
  gpa,
  startDate,
  present,
  endDate,
  onClick,
}) {
  let formattedStartDate = formatDate(startDate);
  let formattedEndDate = present ? "Present" : formatDate(endDate);

  return (
    <div
      className="w-[90%] bg-slate-100 rounded-xl p-3 cursor-pointer hover:bg-slate-300 flex justify-start gap-1 flex-col"
      onClick={onClick}
    >
      <h2 className="font-bold"> {degree}</h2>
      <p className="italic">{college}</p>
      <p>{gpa} GPA</p>
      <p>
        {formattedStartDate} - {formattedEndDate}
      </p>
    </div>
  );
}

function ExperienceCard({
  jobTitle,
  employer,
  department,
  startDate,
  present,
  endDate,
  jobDutiesList,
  onClick,
}) {
  let formattedStartDate = formatDate(startDate);
  let formattedEndDate = present ? "Present" : formatDate(endDate);
  return (
    <div
      className="w-[90%] bg-slate-100 rounded-xl p-3 cursor-pointer hover:bg-slate-300 flex justify-start gap-1 flex-col"
      onClick={onClick}
    >
      <h2 className="font-bold w-full text-center">{jobTitle}</h2>
      <div className="flex gap-2 py-3">
        <h3 className="italic text-xs">{employer}</h3>
        {" - "} <h3 className="text-xs">{department}</h3>
      </div>
      <p className="text-sm">
        {formattedStartDate} - {formattedEndDate}
      </p>
      <ul className="list-disc px-6 text-sm">
        {jobDutiesList.map((jobDuty, index) => (
          <li className="py-1" key={index}>
            {jobDuty}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Card, EducationCard, ExperienceCard };
