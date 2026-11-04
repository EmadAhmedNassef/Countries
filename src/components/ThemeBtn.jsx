import { Select } from "@mantine/core";
import { DesktopIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "../contexts/ThemeContext";
import { useMediaQuery } from "@mantine/hooks";

export default function ThemeBtn() {
  const isSmallScreen = useMediaQuery("(max-width: 440px)");
  const isMediumScreen = useMediaQuery("(max-width: 768px)");

  const { theme, setTheme } = useTheme();

  return (
    <Select
      size={isSmallScreen ? "xs" : isMediumScreen ? "sm" : "md"}
      w={isSmallScreen ? "110" : isMediumScreen ? "150" : "200"}
      className="dark:bg-gray-800! dark:text-white!"
      value={theme}
      onChange={setTheme}
      data={[
        {
          value: "light",
          label: "Light",
        },
        {
          value: "dark",
          label: "Dark",
        },
        {
          value: "system",
          label: "System",
        },
      ]}
      leftSection={
        theme === "light" ? (
          <SunIcon size={17} />
        ) : theme === "dark" ? (
          <MoonIcon size={17} />
        ) : (
          <DesktopIcon size={17} />
        )
      }
      allowDeselect={false}
      classNames={{
        input: "dark:bg-gray-800! dark:text-white! dark:border-gray-600!",
        dropdown: "dark:bg-gray-800! dark:border-gray-600!",
        option: "dark:text-gray-100! dark:hover:bg-gray-700!",
      }}
    />
  );
}
