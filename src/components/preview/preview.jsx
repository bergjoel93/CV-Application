import { format } from "date-fns";
import { Fragment } from "react";
export default function Preview({ mainInfo, educationList, experienceList }) {
  return (
    <div className=" bg-white font-serif flex flex-col gap-4 w-[215.9mm] h-[279.4mm] border m-4 p-6">
      {/* Main Info */}
      <MainInfo mainInfo={mainInfo}></MainInfo>
      {/* Education*/}
      <Education educationList={educationList}></Education>
      {/* Experience */}
      <Experience experienceList={experienceList}></Experience>
    </div>
  );
}

function Experience({ experienceList }) {
  return (
    <div>
      <h1 className="w-full border-b-2 border-slate-400 pb-1 font-bold">
        EXPERIENCE
      </h1>
      <div className="my-3 mx-5">
        {experienceList.map((experience) => (
          <div key={experience.id} className=" grid grid-cols-3 mb-3">
            <div className="col-span-2">
              <h2 className="font-bold">{experience.jobTitle}</h2>
              <div className="flex text-sm gap-1">
                <p className="italic">{experience.employer}</p> {" - "}
                <p>{experience.department}</p>
              </div>
              <div>
                <ul className="list-disc pl-6 text-sm">
                  {experience.jobDutiesList.map((jobDuty, index) => (
                    <Fragment key={index}>
                      <li className="leading-tight">{jobDuty}</li>
                    </Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="justify-self-end">
              <p>
                {formatDate(experience.startDate)} {" - "}
                {experience.present
                  ? "Present"
                  : formatDate(experience.endDate)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Education({ educationList }) {
  return (
    <div>
      <h1 className="w-full border-b-2 border-slate-400 pb-1 font-bold">
        EDUCATION
      </h1>
      <div className="my-3 mx-5">
        {educationList.map((education) => (
          <div key={education.id} className="grid grid-cols-2 mb-3">
            <div>
              <h2 className="font-bold">{education.degree}</h2>
              <p className="italic">{education.college}</p>
              <p className="pl-4">{education.gpa + " GPA"}</p>
            </div>
            <div className="justify-self-end">
              <p>
                {formatDate(education.startDate)} {" - "}
                {education.present ? "Present" : formatDate(education.endDate)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MainInfo({ mainInfo }) {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div>
          <h1 className=" text-2xl uppercase">{mainInfo.name}</h1>
        </div>
        <div className="flex gap-1 items-center text-base">
          <h2 className="border-r-2 border-slate-400 px-1 underline">
            {mainInfo.email}
          </h2>
          <h2 className="border-r-2 border-slate-400 px-1">
            {mainInfo.address1 +
              " " +
              mainInfo.address2 +
              ", " +
              mainInfo.city +
              ", " +
              mainInfo.state +
              " " +
              mainInfo.zip}
          </h2>
          <h2>{mainInfo.phone}</h2>
        </div>
      </div>
    </>
  );
}

// Function to format the date with validation
const formatDate = (date) => {
  if (date instanceof Date && !isNaN(date)) {
    return format(date, "MMMM d, yyyy");
  }
  return "Invalid date"; // Fallback text for invalid dates
};
