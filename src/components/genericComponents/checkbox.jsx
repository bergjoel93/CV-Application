export default function Checkbox({ label, id, ...props }) {
  return (
    <div className="grid grid-cols-2 gap-4 items-center p-1">
      <label htmlFor={id} className="text-right">
        {label}
      </label>
      <input
        type="checkbox"
        className="cursor-pointer h-full w-5 "
        name={id}
        id={id}
        {...props}
      />
    </div>
  );
}
