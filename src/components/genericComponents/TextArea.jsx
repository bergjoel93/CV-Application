export default function TextArea({ label, id, ...props }) {
  return (
    <div className=" w-full">
      <label htmlFor={id} className=" text-right">
        {label}
      </label>
      <textarea
        className=" shadow appearance-none border rounded w-full text-gray-700 p-3 text-sm outline-none focus:shadow-outline"
        name={id}
        id={id}
        {...props}
      />
    </div>
  );
}
