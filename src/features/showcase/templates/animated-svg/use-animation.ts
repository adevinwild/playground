import { use, useEffect, useState } from "react";

export default function useAnimation() {
  const [status, setStatus] = useState<"idle" | "playing" | "finished">("idle");

  useEffect(() => {
    if (status !== "playing") return;

    const timer = setTimeout(() => {
      setStatus("finished");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  useEffect(() => {
    if (status !== "finished") return;

    const timer = setTimeout(() => {
      setStatus("idle");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  return {
    status,
    isPlaying: status === "playing",
    isFinished: status === "finished",
    isIdle: status === "idle",
    play: () => (status === "idle" ? setStatus("playing") : null),
  };
}
