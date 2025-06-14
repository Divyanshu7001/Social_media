const SelectionInput = ({
  label,
  value,
  setValue,
  options,
  required,
  error,
  inputRef,
}) => {
  return (
    <div>
      <label className="font-medium">{label}</label>
      <select
        value={value}
        required={required}
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full border-[1.3px] border-opacity-50 py-3 px-2 rounded-md mt-4 ${
          error ? "border-red-500" : "border-black"
        }`}
        type="text"
        placeholder={`Enter ${label.toLowerCase()}`}
      >
        <option disabled value="">
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default SelectionInput;
