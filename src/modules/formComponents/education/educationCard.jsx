export default function EducationCard({
  degree,
  college,
  gpa,
  startDate,
  endDate,
  onClick,
}) {
  return (
    <div
      className="w-[90%] bg-slate-100 rounded-xl p-3 cursor-pointer hover:bg-slate-300 flex justify-start gap-1 flex-col"
      onClick={onClick}
    >
      <h2 className="font-bold"> {degree}</h2>
      <p className="italic">{college}</p>
      <p>{gpa} GPA</p>
      <p>
        {startDate} - {endDate}
      </p>
    </div>
  );
}
