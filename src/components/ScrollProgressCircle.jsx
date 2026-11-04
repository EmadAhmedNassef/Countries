import { ActionIcon, RingProgress } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ArrowUpIcon } from "@phosphor-icons/react";

const SHOW_AFTER = 240;

export default function ScrollProgressCircle() {
  const [{ y: scrollTop }, scrollTo] = useWindowScroll();
  const { scrollHeight, clientHeight } = document.documentElement;
  const scrollableHeight = scrollHeight - clientHeight;
  const scrollProgress =
    scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

  if (scrollTop <= SHOW_AFTER) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <RingProgress
        size={68}
        thickness={4}
        roundCaps
        sections={[{ value: scrollProgress, color: "violet" }]}
        label={
          <ActionIcon
            variant="filled"
            color="violet"
            size={50}
            radius="xl"
            onClick={() => scrollTo({ y: 0 })}
            aria-label="Scroll to top"
          >
            <ArrowUpIcon size={28} weight="bold" />
          </ActionIcon>
        }
        aria-label={`${Math.round(scrollProgress)}% page progress`}
      />
    </div>
  );
}
