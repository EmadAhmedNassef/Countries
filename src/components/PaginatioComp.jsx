import { useEffect } from "react";
import { Pagination } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

import { getCountries } from "../services/countries.service";
import PaginationSkeleton from "./PaginationSkeleton";

export default function PaginationComp() {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({
      scroll: false,
      shallow: false,
    }),
  );

  const [search] = useQueryState("search", parseAsString.withDefault(""));

  const [region] = useQueryState("region", parseAsString.withDefault(""));

  const { data, isPending, isError } = useQuery({
    queryKey: ["countries", page, region, search],
    queryFn: () => getCountries({ page, region, search }),
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  if (isPending || isError || !data?.meta) {
    return <PaginationSkeleton />;
  }

  return (
    <Pagination
      aria-label="Countries pages"
      total={Math.ceil(data.meta.total / 25)}
      color="green"
      value={page}
      onChange={setPage}
      my={15}
      className="flex items-center justify-center dark:text-gray-100"
    />
  );
}
