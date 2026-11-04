import { Card, Skeleton } from "@mantine/core";

export default function CountryDetailsSkeleton() {
  return (
    <Card
      shadow="sm"
      padding="xl"
      radius="md"
      withBorder
      className="bg-white dark:border-gray-700! dark:bg-gray-800!"
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* Flag */}
        <div className="flex-1">
          <Skeleton
            height={280}
            width="100%"
            maw={500}
            radius="sm"
            className="dark:bg-gray-700!"
          />
        </div>

        {/* Country Information */}
        <div className="flex-1">
          <Skeleton height={32} width="65%" mb="xl" className="dark:bg-gray-700!" />

          <Skeleton height={20} width="85%" mb="md" className="dark:bg-gray-700!" />
          <Skeleton height={20} width="75%" mb="md" className="dark:bg-gray-700!" />
          <Skeleton height={20} width="55%" mb="md" className="dark:bg-gray-700!" />
          <Skeleton height={20} width="65%" mb="md" className="dark:bg-gray-700!" />
          <Skeleton height={20} width="60%" mb="md" className="dark:bg-gray-700!" />
          <Skeleton height={20} width="50%" mb="md" className="dark:bg-gray-700!" />
        </div>
      </div>
    </Card>
  );
}
