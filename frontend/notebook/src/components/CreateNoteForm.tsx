import { Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { INote } from "../types";

interface CreateProps {
  onCreate: (note: INote) => void;
}

export function CreateNoteForm({ onCreate }: CreateProps) {
  const [note, setNote] = useState<INote>({ title: "", description: "", createdAt: new Date() });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(note);
    setNote({ title: "", description: "", createdAt: new Date() }); // Reset the note state after creating
  };

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
      <h3 className="font-bold text-xl">Создание заметки</h3>
      <Input
        placeholder="Название"
        value={note.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNote({ ...note, title: e.target.value })
        }
      />
      <Textarea
        placeholder="Описание"
        value={note.description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setNote({ ...note, description: e.target.value })
        }
      />
      <Button type="submit" colorScheme="teal">
        Создать
      </Button>
    </form>
  );
}