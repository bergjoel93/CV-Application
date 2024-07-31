export default function TextInput({ type, label, id }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <label htmlFor={id} className="col-span-1 text-right">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="col-span-2 p-2 border border-gray-300 rounded"
      />
    </div>
  );
}
