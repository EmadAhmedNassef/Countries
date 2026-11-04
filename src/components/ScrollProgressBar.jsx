import { Progress } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

export default function ScrollProgressBar() {
  const [{ y: scrollTop }] = useWindowScroll();
  const { scrollHeight, clientHeight } = document.documentElement;
  const scrollableHeight = scrollHeight - clientHeight;
  const scrollProgress =
    scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

  return (
    <Progress
      role="progressbar"
      value={scrollProgress}
      size="sm"
      radius={0}
      color="violet"
      transitionDuration={0}
      className="fixed left-0 top-0 z-9999 w-full"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
      aria-label={`${Math.round(scrollProgress)}% page progress`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scrollProgress)}
    />
  );
}
