function Input({ labelText, onChange, disabled, value, type = "text",placeholder }) {
  return (
    <div className="w-full">
      <label className="block text-base font-medium text-gray-700 mb-1">
        {labelText}
      </label>

      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
        className="sm:w-full max-w-xl p-3 rounded-xl bg-mainBg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 disabled:opacity-50"
      />
    </div>
  );
}

export default Input;
