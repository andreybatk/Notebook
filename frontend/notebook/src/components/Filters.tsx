import { Input, Select } from "@chakra-ui/react";

export function Filters(){
  return (
    <div className="flex flex-col gap-5">
      <Input
        placeholder="Поиск"
        value="test"
      />
      <Select
        value="test"
        // onChange={(e) => setFilter({ ...filter, sortOrder: e.target.value })}
      >
        <option value={"desc"}>Сначала новые</option>
        <option value={"asc"}>Сначала старые</option>
      </Select>
    </div>
  );
};