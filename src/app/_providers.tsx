"use client";

import { ReactNode } from "react";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster theme="dark" richColors duration={10000} />
      {children}
    </>
  );
};

export default Providers;
