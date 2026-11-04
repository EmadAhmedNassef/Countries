import { Box, Text } from "@mantine/core";
import ThemeBtn from "./ThemeBtn";

export default function HeaderComp() {
  return (
    <Box component="header" className="h-15 bg-white shadow-lg dark:bg-gray-900">
      <Box className="max-w-7xl mx-auto flex items-center justify-between h-full px-4">
        <Text
          component="h1"
          className="text-xs! md:text-xl! font-bold! text-gray-800! dark:text-white!"
        >
          Where in the world?
        </Text>
        <ThemeBtn />
      </Box>
    </Box>
  );
}
