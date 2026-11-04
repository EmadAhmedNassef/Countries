import { Badge, Card, Group, Text, Title } from "@mantine/core";
import { getCountryByName } from "../services/countries.service";
import CountryDetailsSkeleton from "../components/CountryDetailsSkeleton";
import { useQuery } from "@tanstack/react-query";

export default function CountryDetailsComp({ name }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["country", name],
    queryFn: () => getCountryByName(name),
    enabled: !!name,
  });

  if (isPending) return <CountryDetailsSkeleton />;
  if (isError) return <p role="alert">{error.message}</p>;

  const country = data;
  return (
    <Card
      shadow="sm"
      padding="xl"
      radius="md"
      withBorder
      className="bg-white dark:border-gray-700! dark:bg-gray-800!"
    >
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 text-gray-800 dark:text-gray-100">
          {country.flag?.url_png ? (
            <img
              src={country.flag.url_png}
              alt={`${country.names?.common} flag`}
              className="w-full max-w-lg"
            />
          ) : (
            <span role="img" aria-label={`${country.names?.common} flag`} className="text-8xl">
              {country.flag?.emoji || "🏳️"}
            </span>
          )}
        </div>

        <div className="flex-1">
          <Title order={2} mb="lg" className="text-gray-800! dark:text-white!">
            {country.names?.common}
          </Title>

          <Text mb="sm" className="text-gray-800! dark:text-gray-100!">
            <strong>Official Name:</strong> {country.names?.official || "N/A"}
          </Text>

          <Text mb="sm" className="text-gray-800! dark:text-gray-100!">
            <strong>Population:</strong>{" "}
            {country.population?.toLocaleString() ?? "N/A"}
          </Text>

          <Text mb="sm" className="text-gray-800! dark:text-gray-100!">
            <strong>Region:</strong> {country.region || "N/A"}
          </Text>

          <Text mb="sm" className="text-gray-800! dark:text-gray-100!">
            <strong>Capital:</strong> {country.capitals?.[0]?.name || "N/A"}
          </Text>

          <Text mb="sm" className="text-gray-800! dark:text-gray-100!">
            <strong>Subregion:</strong> {country.subregion || "N/A"}
          </Text>

          <Text mb="sm" className="text-gray-800! dark:text-gray-100!">
            <strong>Area:</strong>{" "}
            {country.area?.kilometers?.toLocaleString() ?? "N/A"} km²
          </Text>

          <Text mb={4} className="text-gray-800! dark:text-gray-100!">
            <strong>Borders:</strong>
          </Text>
          <Group gap="xs" mb="md">
            {country.borders?.length ? (
              country.borders.map((border) => (
                <Badge key={border} variant="light" color="blue">
                  {border}
                </Badge>
              ))
            ) : (
              <Badge variant="light" color="gray">
                None
              </Badge>
            )}
          </Group>

          <Text mb={4} className="text-gray-800! dark:text-gray-100!">
            <strong>Languages:</strong>
          </Text>
          <Group gap="xs">
            {country.languages?.length ? (
              country.languages.map((language) => (
                <Badge key={language.iso639_3 || language.name} variant="light">
                  {language.name}
                </Badge>
              ))
            ) : (
              <Badge variant="light" color="gray">
                N/A
              </Badge>
            )}
          </Group>
        </div>
      </div>
    </Card>
  );
}
