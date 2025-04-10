type Note = {
  text: string;
};

export default function Notes({
  notes,
  title,
}: {
  notes: Note[];
  title: string;
}) {
  return (
    <div className="flex flex-col gap-y-6">
      <h4 className="text-zinc-200 text-xl font-medium">{title}</h4>

      <ul className="space-y-2 items-start">
        {notes.map((note) => (
          <li
            key={note.text}
            className="text-lg sm:text-xl text-zinc-400 flex items-start sm:items-center gap-x-4"
          >
            {/* <div className="w-4 sm:w-[2rem] h-px bg-zinc-800 mt-4" /> */}
            <span className="w-full">{note.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
