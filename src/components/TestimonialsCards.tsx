"use client";

import { cn } from "@/lib/utils";
import InfiniteMovingCards from "./ui/infinite-moving-cards";

const codingClasses = [
  {
    quote:
      "The work was smooth from start to finish. Clear communication made everything easier.",
    name: "Aarav Sharma",
    title: "Product Designer",
  },
  {
    quote:
      "I’ve rarely seen someone pick up complex ideas this fast. Reliable and sharp.",
    name: "Neha Verma",
    title: "Full-Stack Developer",
  },
  {
    quote:
      "Professional, calm under pressure, and delivers on time. Couldn’t ask for more.",
    name: "Rohan Mehta",
    title: "Project Manager",
  },
  {
    quote:
      "Always finds practical solutions instead of overthinking. A great person to collaborate with.",
    name: "Sara Khan",
    title: "Marketing Lead",
  },
  {
    quote:
      "Understands the problem before jumping into code. That saves everyone a lot of time.",
    name: "Kabir Patel",
    title: "Tech Lead",
  },
  {
    quote:
      "Dependable, focused, and communicates clearly. Makes even tough tasks feel manageable.",
    name: "Isha Nair",
    title: "Operations Head",
  },
  {
    quote:
      "Brings fresh ideas and backs them up with solid execution. Great energy on any team.",
    name: "Yuvraj Singh",
    title: "Creative Director",
  },
];

function TestimonialsCards() {
  return (
    <div className="h-160 w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center  overflow-hidden ">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "flex flex-col items-center justify-center"
        )}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Hear Our Harmony: Voices of Success
        </h2>
        <div className="">
          <InfiniteMovingCards
            items={codingClasses}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCards;
