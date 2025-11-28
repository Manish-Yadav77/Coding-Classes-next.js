"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

type Props = {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export default function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  // duplicate items in JSX (React-controlled; SSR/hydration safe)
  const doubled = useMemo(() => [...items, ...items], [items]);

  // set CSS variables once on mount or when direction/speed change
  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    el.style.setProperty(
      "--animation-direction",
      direction === "left" ? "normal" : "reverse"
    );

    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    el.style.setProperty("--animation-duration", duration);

    // start animation after initial render (avoids whitespace jump)
    // we can set started true immediately; animation uses CSS var
    setStarted(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          started && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        // accessibility: allow keyboard users to pause via focus
        onFocus={() => {
          if (pauseOnHover) {
            const ul = containerRef.current?.querySelector("ul");
            if (ul) ul.style.animationPlayState = "paused";
          }
        }}
        onBlur={() => {
          const ul = containerRef.current?.querySelector("ul");
          if (ul) ul.style.animationPlayState = "running";
        }}
      >
        {doubled.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
          >
            <blockquote>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
