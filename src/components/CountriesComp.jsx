import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { Card, SimpleGrid, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

import { getCountries } from "../services/countries.service";
import CountrySkeleton from "./CountrySkeleton";

export default function CountriesComp() {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [region] = useQueryState("region", parseAsString.withDefault(""));

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["countries", page, region, search],
    queryFn: () => getCountries({ page, region, search }),
  });

  if (isPending) {
    return (
      <section aria-labelledby="countries-heading" aria-busy="true">
        <h2 id="countries-heading" className="sr-only">
          Countries
        </h2>
        <SimpleGrid
          className="max-w-7xl mx-auto px-4 pb-12"
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: "xl", sm: "lg" }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <CountrySkeleton key={index} />
          ))}
        </SimpleGrid>
      </section>
    );
  }

  if (isError) {
    return (
      <p role="alert" className="px-4 pb-12 text-center">
        {error.message}
      </p>
    );
  }

  return (
    <section aria-labelledby="countries-heading">
      <h2 id="countries-heading" className="sr-only">
        Countries
      </h2>
      <SimpleGrid
        className="max-w-7xl mx-auto px-4 pb-12"
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: "xl", sm: "lg" }}
      >
        {data?.objects?.map((country) => (
          <Card
            component={Link}
            to={`/country/${encodeURIComponent(country.names.common)}`}
            key={country.uuid || country.codes.alpha_2 || country.names.common}
            shadow="sm"
            padding={0}
            radius="md"
            withBorder
            className="bg-white no-underline dark:border-gray-700! dark:bg-gray-800!"
          >
            <div className="flex h-48 items-center justify-center bg-gray-100 text-7xl dark:bg-gray-700">
              {country.flag?.url_png ? (
                <img src={country.flag.url_png} alt={`${country.names.common} flag`} />
              ) : (
                <span role="img" aria-label={`${country.names.common} flag`}>
                  {country.flag?.emoji || "🏳️"}
                </span>
              )}
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
    </section>
  );
}
