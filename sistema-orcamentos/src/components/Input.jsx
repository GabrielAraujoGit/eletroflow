export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium">{label}</label>}
      <input {...props} className="border rounded p-2 focus:outline-blue-500" />
    </div>
  );
}
