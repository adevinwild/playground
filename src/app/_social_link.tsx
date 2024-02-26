"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import useAchievementListener from "~/lib/use-achievement-listener";

const SocialLink = () => {
  const [hasClicked, setHasClicked] = useState(false);

  useAchievementListener({
    condition: hasClicked,
    name: "social",
  });

  return (
    <Button variant="link" className="gap-x-1.5 font-normal" asChild>
      <Link
        href="https://x.com/adevinwild"
        rel="noopener noreferrer"
        target="_blank"
        onClick={() => setHasClicked(true)}
      >
        <span>𝕏</span>
        <span>adevinwild</span>
      </Link>
    </Button>
  );
};

export default SocialLink;
