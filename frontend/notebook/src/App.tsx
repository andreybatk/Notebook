import { CreateNoteForm }  from "./components/CreateNoteForm.tsx";
import { Note }  from "./components/Note.tsx";
import { Filters }  from "./components/Filters.tsx";

function App() {
  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <CreateNoteForm />
        <Filters />
      </div>

      <ul className="flex flex-col gap-5 w-1/2">
          <li key='123'>
            <Note/>
          </li>
      </ul>
    </section>
  );
}

export default App;