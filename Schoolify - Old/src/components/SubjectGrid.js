export default function SubjectGrid() {
  const subjects = [
    { name: "Science", color: "bg-sky-200" },
    { name: "Maths", color: "bg-cyan-500" },
    { name: "History", color: "bg-sky-400" },
    { name: "History", color: "bg-sky-200" },
    { name: "English Language", color: "bg-stone-200" },
    { name: "Western Music", color: "bg-slate-400" },
    { name: "Tamil", color: "bg-blue-300" },
    { name: "Tamil", color: "bg-stone-200" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {subjects.map((subject, index) => (
        <div
          key={index}
          className={`${subject.color} rounded-2xl shadow-lg p-8 aspect-square flex items-center justify-center transition-transform hover:scale-105 cursor-pointer`}
        >
          <h2 className="text-center text-gray-800 font-medium text-lg">{subject.name}</h2>
        </div>
      ))}
    </div>
  )
}