export default function Checkbox({ label, id, ...props }) {
  return (
    <div className="grid grid-cols-2 gap-4 items-center p-1">
      <label htmlFor={id} className="text-right">
        {label}
      </label>
      <input
        className=" shadow appearance-none border rounded w-6 h-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer text-blue-600"
        type="checkbox"
        id={id}
        {...props}
      />
    </div>
  );
}
