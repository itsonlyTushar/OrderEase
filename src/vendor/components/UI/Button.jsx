

function Button({ BtnText, Icon, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="inline-flex items-center gap-2 bg-blackBg text-white font-semibold rounded-xl px-5 py-2 hover:bg-opacity-90 transition-all duration-200 shadow-md text-sm sm:text-base"
    >
      {Icon && <span className="text-lg">{Icon}</span>}
      <span>{BtnText}</span>
    </button>
  );
}

export default Button;
