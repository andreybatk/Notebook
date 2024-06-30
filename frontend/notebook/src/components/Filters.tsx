import { Input, Select } from "@chakra-ui/react";
import { INoteFilter } from "../types";

interface FiltersProps {
  filter: INoteFilter
  setFilter: (filter: INoteFilter) => void;
}

export function Filters({ filter, setFilter }: FiltersProps) {
  return (
    <div className="flex flex-col gap-5">
      <Input
        placeholder="Поиск"
        value={filter.search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter({ ...filter, search: e.target.value })
        }
      />
      <Select
        value={filter.sortOrder}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setFilter({ ...filter, sortOrder: e.target.value })
        }
      >
        <option value="desc">Сначала новые</option>
        <option value="asc">Сначала старые</option>
      </Select>
    </div>
  );
}