import type { PropsWithChildren } from "react";
import { DockNav } from "./DockNav";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 gradient-orbit opacity-70" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        {children}
      </div>
      <DockNav />
    </div>
  );
}


