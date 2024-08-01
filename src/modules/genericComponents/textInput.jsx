export default function TextInput({
  type,
  label,
  id,
  pattern = null,
  inputMode = null,
  ...props
}) {
  return (
    <div className="grid grid-cols-3 gap-4 items-center p-1">
      <label htmlFor={id} className="col-span-1 text-right">
        {label}
      </label>
      <input
        className=" col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        id={id}
        pattern={pattern}
        inputMode={inputMode}
        {...props}
      />
    </div>
  );
}
