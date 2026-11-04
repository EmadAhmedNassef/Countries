import { Group, Skeleton } from "@mantine/core";

export default function PaginationSkeleton() {
  return (
    <Group justify="center" my={15} gap={8} className="dark:text-gray-100">
      <Skeleton height={36} width={36} radius="md" className="dark:bg-gray-700!" />
      <Skeleton height={36} width={36} radius="md" className="dark:bg-gray-700!" />
      <Skeleton height={36} width={36} radius="md" className="dark:bg-gray-700!" />
      <Skeleton height={36} width={36} radius="md" className="dark:bg-gray-700!" />
      <Skeleton height={36} width={36} radius="md" className="dark:bg-gray-700!" />
    </Group>
  );
}
