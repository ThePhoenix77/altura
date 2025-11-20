import React from "react";
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("bg-secondary p-6 rounded-lg shadow-md", className)}>
      {children}
    </div>
  );
}
