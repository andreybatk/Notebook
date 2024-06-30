import { CreateNoteForm }  from "./components/CreateNoteForm.tsx";
import { Note }  from "./components/Note.tsx";
import { Filters }  from "./components/Filters.tsx";
import { notesService } from "./services/notes.service.ts";
import { useEffect, useState } from "react";
import { ICreateNote, INote, INoteFilter } from "./types"; // Adjust the path if needed

function App() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [filter, setFilter] = useState<INoteFilter>({
		search: "",
		sortItem: "date",
		sortOrder: "desc",
	});
  
  useEffect(() => {
		const fetchData = async () => {
			let notes = await notesService.getNotes(filter);
			setNotes(notes);
		};

		fetchData();
	}, [filter]);

  const onCreate = async (createNote: ICreateNote) => {
		await notesService.createNote(createNote);
		let notes = await notesService.getNotes(filter);
    setNotes(notes);
	};

  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <CreateNoteForm onCreate={onCreate}/>
        <Filters filter={filter} setFilter={setFilter} />
      </div>

      <ul className="flex flex-col gap-5 w-1/2">
        {notes.map((n) => (
            <li key={n.id}>
              <Note
                title={n.title}
                description={n.description}
                createdAt={n.createdAt}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}

export default App;