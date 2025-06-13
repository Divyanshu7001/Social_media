const TextInput = ({
  label,
  value,
  setValue,
  required,
  error,
  inputRef,
}) => {
  return (
    <div>
      <label className="font-medium">{label}</label>
      <input
        value={value}
        required={required}
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md border-black mt-4 focus:outline-none ${
          error ? "border-red-500 focus:border-red-500 ring-2 ring-red-200" : ""
        }`}
        type="text"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default TextInput;
