import { useEffect } from "react";
import { toast } from "sonner";
import { Achievement, useAchievementStore } from "~/stores/achievement-store";

type Options = {
  name: Achievement;
  condition: boolean;
};
export default function useAchievementListener({ condition, name }: Options) {
  const unlockAchievement = useAchievementStore(
    (state) => state.unlockAchievement
  );

  const hasUnlockedAchievement = useAchievementStore((state) =>
    state.achievements.includes(name)
  );

  const achievementName = useAchievementStore((state) =>
    state.getAchievementName(name)
  );

  useEffect(() => {
    if (!condition || hasUnlockedAchievement) return;
    console.log("unlocking achievement", name);
    unlockAchievement(name);
    toast.success(`⭐ Achievement unlocked : ${achievementName}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition]);
}
