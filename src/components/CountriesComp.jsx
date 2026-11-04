import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { Card, SimpleGrid, Text, Title } from "@mantine/core";

import { getCountries } from "../services/countries.service";
import CountrySkeleton from "./CountrySkeleton";
import { useNavigate } from "react-router-dom";

export default function CountriesComp() {
  const navigate = useNavigate();
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [region] = useQueryState("region", parseAsString.withDefault(""));

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["countries", page, region, search],
    queryFn: () => getCountries({ page, region, search }),
  });

  if (isPending) {
    return (
      <SimpleGrid
        className="max-w-7xl mx-auto px-4 pb-12"
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: "xl", sm: "lg" }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <CountrySkeleton key={index} />
        ))}
      </SimpleGrid>
    );
  }

  if (isError) return <p>{error.message}</p>;

  return (
    <SimpleGrid
      className="max-w-7xl mx-auto px-4 pb-12"
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing={{ base: "xl", sm: "lg" }}
    >
      {data?.objects?.map((country) => (
        <Card
          key={country.uuid || country.codes.alpha_2 || country.names.common}
          shadow="sm"
          padding={0}
          radius="md"
          withBorder
          className="bg-white dark:border-gray-700! dark:bg-gray-800!"
          onClick={() =>
            navigate(`/country/${encodeURIComponent(country.names.common)}`)
          }
        >
          <div className="flex h-48 items-center justify-center bg-gray-100 text-7xl dark:bg-gray-700">
            <img
              src={country.flag?.url_png || country.flag?.emoji || "🏳️"}
              alt={country.names.common}
            />
          </div>

          <div className="p-6 text-gray-800 dark:text-gray-100">
            <Title order={3} mb="md" className="text-gray-800! dark:text-white!">
              {country.names.common}
            </Title>

            <Text className="text-gray-800! dark:text-gray-100!">
              <strong>Population:</strong>{" "}
              {country.population?.toLocaleString() ?? "N/A"}
            </Text>

            <Text className="text-gray-800! dark:text-gray-100!">
              <strong>Region:</strong> {country.region || "N/A"}
            </Text>

            <Text className="text-gray-800! dark:text-gray-100!">
              <strong>Capital:</strong> {country.capitals?.[0]?.name || "N/A"}
            </Text>
          </div>
        </Card>
      ))}
    </SimpleGrid>
  );
}
