import { Box } from "@mantine/core";

import FiltersComp from "./components/FiltersComp";
import CountriesComp from "./components/CountriesComp";
import PaginationComp from "./components/PaginatioComp";

export default function App() {
  return (
    <Box>
      <FiltersComp />
      <CountriesComp />
      <PaginationComp />
    </Box>
  );
}
