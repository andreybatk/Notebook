import { Button, Input, Textarea } from "@chakra-ui/react";

export function CreateNoteForm(){
  return (
    <form className="w-full flex flex-col gap-3">
      <h3 className="font-bold text-xl">Создание заметки</h3>
      <Input
        placeholder="Название"
        value="test"
      />
      <Textarea
        placeholder="Описание"
        value="test"
        // onChange={(e) => setNote({ ...note, description: e.target.value })}
      />
      <Button type="submit" colorScheme="teal">
        Создать
      </Button>
    </form>
  );
};
