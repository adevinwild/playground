"use client";
import { StarIcon } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useAchievementStore } from "~/stores/achievement-store";

const MAX_ACHIEVEMENTS = 4;
const AchievementLink = () => {
  const achievements = useAchievementStore((state) => state.achievements);

  const hasAchievements = achievements.length > 0;

  const hasUnlockedAll = achievements.length === MAX_ACHIEVEMENTS;

  useEffect(() => {
    if (hasAchievements) return;
    console.log(
      "Ohoh, looks like you are investigating the code! 🕵️‍♂️\n\nWhat if I tell you there is some achievements to unlock on this website? Ready to find them all?"
    );
  }, [hasAchievements]);

  if (!hasAchievements) return null;

  const onShowAchievements = () => {
    const hasUnlockedAll = achievements.length === MAX_ACHIEVEMENTS;

    if (!hasUnlockedAll) {
      toast.info(
        `You have unlocked ${achievements.length}/${MAX_ACHIEVEMENTS} achievements!`
      );
      return;
    }

    toast.info("Check the console for more details!");
    console.log(
      "Congrats! You have unlocked all achievements!\nIf you loved this project, consider giving it a star on GitHub! 🌟\n\nMore components to come soon, in the meantime do not hesitate to contribute!\n\nBest regards, Adil"
    );
    console.log("https://github.com/adevinwild/playground");
  };

  return (
    <Button
      variant="link"
      className={cn(
        "gap-x-2",
        hasUnlockedAll && "animate-pulse text-emerald-100"
      )}
      onClick={onShowAchievements}
    >
      <StarIcon className="size-4 text-emerald-400" />
      Achievements
    </Button>
  );
};

export default AchievementLink;
