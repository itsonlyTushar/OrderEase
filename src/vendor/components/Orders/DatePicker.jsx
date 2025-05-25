
function DatePicker({date, setDate}) {
  return (
    <section className="p-4 sm:p-5">
        <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="outline-none bg-mainBg rounded-xl p-2 w-full sm:w-auto"
            type="date"
            name="date"
            id="date"
        />
    </section>    
  )
}

export default DatePicker