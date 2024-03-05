import AnimatedNumberTemplate from "~/features/showcase/templates/animated-number";
import AnimatedSVGTemplate from "~/features/showcase/templates/animated-svg";
import FileUploadTemplate from "~/features/showcase/templates/file-upload";
import StepperTemplate from "~/features/showcase/templates/stepper";

export default function Page() {
  return (
    <main className="flex min-h-dvh max-w-[90dvw] lg:max-w-4xl mx-auto pt-28 pb-24">
      <div className="flex flex-col gap-y-9 w-full">
        <div className="flex flex-col">
          <h3 className="text-xl font-medium">Components</h3>
          <p className="text-base text-neutral-500">
            A collection of components and utilities to play with that I've
            built.
          </p>
        </div>

        <div className="w-full h-full flex-grow grid lg:grid-cols-2 gap-6">
          <StepperTemplate />
          <AnimatedSVGTemplate />
          <AnimatedNumberTemplate />
          <FileUploadTemplate />
        </div>
      </div>
    </main>
  );
}
