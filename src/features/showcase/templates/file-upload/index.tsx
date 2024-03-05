"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

import { Github } from "lucide-react";
import { useState } from "react";
import FileUpload from "~/components/playground/file-upload";

const getFileSize = (file: File) => {
  let size = file.size;
  const units = ["B", "KB", "MB", "GB", "TB"];

  let i = 0;
  while (size >= 1024) {
    size /= 1024;
    i++;
  }

  return `${size.toFixed(2)} ${units[i]}`;
};

const FileUploadTemplate = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="w-full h-full bg-neutral-900 lg:col-span-2 p-6 flex flex-col gap-y-5 ring-2 ring-neutral-800 rounded-2xl shadow-2xl shadow-black">
      <div className="h-56 flex-col relative bg-neutral-950 gap-x-5 rounded-lg p-5 flex items-center">
        <FileUpload accept={["image/*"]} onUpload={setFiles} />
        <div className="grid text-center mt-4">
          <span className="text-sm text-neutral-400">
            {files.at(0) ? files.at(0)?.name : "No file selected"}
          </span>
          <span className="text-xs text-neutral-500">
            {files.at(0) ? getFileSize(files.at(0)!) : "Size of file"}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-medium">File Upload</h4>
        <p className="text-base text-neutral-500">
          A simple and reusable file upload component.
        </p>
        <div className="flex gap-x-2 mt-4 ">
          <Button variant="outline" className="max-w-max gap-x-2" asChild>
            <Link
              href="https://gist.github.com/adevinwild/d8b829f5cdfd01c246af2f338c4f2c27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              Get the code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadTemplate;
