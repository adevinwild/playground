import { useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { cn } from "~/lib/utils";

type FileUploadProps = {
  onUpload?: (_files: File[]) => void;
  accept: string[];
  error?: string;
  className?: string;
  multiple?: boolean;
  text?: React.ReactElement | string;
};

const defaultText = (
  <span className="text-sm flex flex-col group">
    Drop files here or{" "}
    <span className="text-emerald-400 underline underline-offset-2">
      browse your computer
    </span>
  </span>
);

export default function FileUpload({
  onUpload,
  accept,
  error,
  className,
  text = defaultText,
  multiple = false,
}: FileUploadProps) {
  const [isUploadError, setUploadError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;

    onUpload?.(Array.from(fileList));
  };

  const onFileDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setUploadError(false);
    const files: File[] = [];

    if (!e.dataTransfer.items) {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        if (accept.indexOf(e.dataTransfer.files[i].type) > -1) {
          files.push(e.dataTransfer.files[i]);
        }
      }
      return;
    }

    for (let i = 0; i < e.dataTransfer.items.length; i++) {
      if (e.dataTransfer.items[i].kind === "file") {
        const file = e.dataTransfer.items[i].getAsFile();
        if (file && accept.indexOf(file.type) > -1) {
          files.push(file);
        }
      }
    }

    if (!files.length) {
      setUploadError(true);
      return;
    }

    onUpload?.(files);
  };

  return (
    <div
      onClick={() => inputRef?.current?.click()}
      onDrop={onFileDrop}
      onDragOver={(e) => e.preventDefault()}
      className={cn(
        "flex flex-col select-none text-sm text-neutral-500 cursor-pointer p-4 rounded-lg items-center justify-center w-full h-full rounded-rounded border border-dashed border-neutral-800 transition-colors hover:border-emerald-600 hover:text-neutral-400",
        className
      )}
    >
      <div className="flex flex-col items-center max-w-xs text-center">
        {text}
      </div>

      {isUploadError && (
        <small className="text-rose-600">
          {error || "Invalid file type. Please upload a valid file type."}
        </small>
      )}

      <input
        ref={inputRef}
        accept={accept.join(", ")}
        multiple={multiple}
        type="file"
        onChange={onFileUpload}
        className="hidden"
      />
    </div>
  );
}
