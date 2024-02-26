import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Achievement =
  | "stepper"
  | "animated-number"
  | "animated-svg"
  | "social";

type AchievementState = {
  achievements: Achievement[];
  unlockAchievement: (achievement: Achievement) => void;
  getAchievementName: (achievement: Achievement) => string;
};

export const useAchievementStore = create<AchievementState>()(
  persist(
    (set) => ({
      achievements: [],
      unlockAchievement: (achievement: Achievement) => {
        set((state) => {
          return { achievements: [...state.achievements, achievement] };
        });
      },
      getAchievementName: (achievement: Achievement) => {
        switch (achievement) {
          case "stepper":
            return "STEP BY STEP!";
          case "animated-number":
            return "IT'S OVER 9000!";
          case "animated-svg":
            return "SVG MASTER!";
          case "social":
            return "ARE YOU GOING TO FOLLOW ME?!🤩";
        }
      },
    }),
    {
      name: "adevinwild-storage",
    }
  )
);
