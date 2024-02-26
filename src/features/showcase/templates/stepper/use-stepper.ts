import { useState } from "react";

export enum AvailableSteps {
  FIRST,
  SECOND,
  THIRD,
}

export default function useStepper() {
  const [step, setStep] = useState<AvailableSteps>(AvailableSteps.FIRST);

  const nextStep = () => {
    switch (step) {
      case AvailableSteps.FIRST:
        setStep(AvailableSteps.SECOND);
        break;
      case AvailableSteps.SECOND:
        setStep(AvailableSteps.THIRD);
        break;
      case AvailableSteps.THIRD:
        setStep(AvailableSteps.FIRST);
        break;
      default:
        break;
    }
  };

  const previousStep = () => {
    switch (step) {
      case AvailableSteps.FIRST:
        setStep(AvailableSteps.THIRD);
        break;
      case AvailableSteps.SECOND:
        setStep(AvailableSteps.FIRST);
        break;
      case AvailableSteps.THIRD:
        setStep(AvailableSteps.SECOND);
        break;
      default:
        break;
    }
  };

  return {
    step,
    nextStep,
    previousStep,
  };
}
