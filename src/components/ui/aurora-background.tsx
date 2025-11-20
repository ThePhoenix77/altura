"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-black text-white transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Mask wrapper: radial mask to make aurora fade smoothly toward edges */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
              maskMode: "luminance",
              WebkitMaskRepeat: "no-repeat",
            }}
          >
            {/* Layered strip backgrounds for chaotic, vibrant aurora */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(110deg, rgba(229,9,20,0.08) 0%, transparent 12%, rgba(229,9,20,0.06) 14%, transparent 26%), linear-gradient(90deg, rgba(229,9,20,0.04), rgba(229,9,20,0.06), rgba(229,9,20,0.08))`,
                backgroundSize: `120% 120%, 400% 400%`,
                backgroundPosition: `0% 40%, 0% 50%`,
                filter: `blur(12px)`,
                opacity: 0.65,
                mixBlendMode: `screen`,
                animation: `aurora 90s linear infinite`,
              }}
            />

            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(135deg, rgba(229,9,20,0.06) 0%, transparent 10%, rgba(229,9,20,0.04) 12%, transparent 22%), linear-gradient(90deg, rgba(229,9,20,0.03), rgba(229,9,20,0.05))`,
                backgroundSize: `150% 150%, 500% 500%`,
                backgroundPosition: `20% 60%, 10% 40%`,
                filter: `blur(18px)`,
                opacity: 0.5,
                mixBlendMode: `screen`,
                animation: `aurora 120s linear infinite`,
              }}
            />

            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(95deg, rgba(229,9,20,0.05) 0%, transparent 8%, rgba(229,9,20,0.03) 10%, transparent 18%), linear-gradient(90deg, rgba(229,9,20,0.02), rgba(229,9,20,0.04))`,
                backgroundSize: `100% 100%, 300% 300%`,
                backgroundPosition: `50% 20%, 30% 60%`,
                filter: `blur(10px)`,
                opacity: 0.45,
                mixBlendMode: `overlay`,
                animation: `aurora 70s linear infinite`,
              }}
            />

            {/* Optional directional radial mask retained */}
            {showRadialGradient && (
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  maskImage: `radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%)`,
                }}
              />
            )}
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuroraBackground;
