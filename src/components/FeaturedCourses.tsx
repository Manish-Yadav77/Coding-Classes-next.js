"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";

import courseData from "../data/coding_course.json";
import Link from "next/link";
import { div, p } from "motion/react-client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900 px-4">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center grow">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />

                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-300">
                    {course.title}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 grow">
                    {course.description}
                  </p>

                  <p className="text-md font-semibold text-purple-600 dark:text-purple-400 mt-3">
                    Price: ${course.price}
                  </p>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-5 py-2.5 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-pink-500/40 transition duration-300 hover:scale-105"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
