import { Box, Select, TextInput } from "@mantine/core";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export default function FiltersComp() {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({
      scroll: false,
      shallow: false,
    }),
  );

  const [region, setRegion] = useQueryState(
    "region",
    parseAsString.withDefault("").withOptions({
      scroll: false,
      shallow: false,
    }),
  );

  const [, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({
      scroll: false,
      shallow: false,
    }),
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleRegionChange = (value) => {
    setRegion(value || "");
    setPage(1);
  };

  return (
    <Box className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 px-4 py-8 md:py-12">
      <TextInput
        placeholder="Search for a country..."
        size="md"
        className="w-full sm:w-[55%] lg:w-[35%] dark:bg-gray-800! dark:text-white!"
        leftSection={<MagnifyingGlassIcon size={20} />}
        value={search}
        onChange={handleSearchChange}
        classNames={{
          input:
            "dark:bg-gray-800! dark:text-white! dark:border-gray-600! dark:placeholder:text-gray-300!",
        }}
      />

      <Select
        size="md"
        placeholder="Filter by Region"
        value={region}
        onChange={handleRegionChange}
        data={[
          { value: "africa", label: "Africa" },
          { value: "americas", label: "America" },
          { value: "asia", label: "Asia" },
          { value: "europe", label: "Europe" },
          { value: "oceania", label: "Oceania" },
        ]}
        className="w-full sm:w-[40%] lg:w-52 dark:bg-gray-800! dark:text-white!"
        classNames={{
          input: "dark:bg-gray-800! dark:text-white! dark:border-gray-600!",
          dropdown: "dark:bg-gray-800! dark:border-gray-600!",
          option: "dark:text-gray-100! dark:hover:bg-gray-700!",
        }}
      />
    </Box>
  );
}
