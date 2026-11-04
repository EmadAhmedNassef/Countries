import { Card, Skeleton, Stack } from "@mantine/core";

export default function CountrySkeleton() {
  return (
    <Card
      shadow="sm"
      padding={0}
      radius="md"
      withBorder
      className="bg-white dark:border-gray-700! dark:bg-gray-800!"
    >
      {/* Flag placeholder */}
      <Skeleton height={192} radius={0} className="dark:bg-gray-700!" />

      <Stack p="lg" gap="md">
        {/* Country name */}
        <Skeleton height={24} width="70%" className="dark:bg-gray-700!" />

        {/* Population */}
        <Skeleton height={16} width="85%" className="dark:bg-gray-700!" />

        {/* Region */}
        <Skeleton height={16} width="55%" className="dark:bg-gray-700!" />

        {/* Capital */}
        <Skeleton height={16} width="65%" className="dark:bg-gray-700!" />
      </Stack>
    </Card>
  );
}
