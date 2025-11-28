'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';


export const featuredWebinars = [
  {
    title: "Mastering Authentication in Modern Apps",
    description:
      "Learn how to implement secure authentication using JWT, hashing, refresh tokens, and best practices used in production apps.",
    link: "https://yourdomain.com/webinars/authentication",
  },
  {
    title: "Backend APIs With Node.js & Express",
    description:
      "A live walkthrough on building scalable APIs, handling routes, middleware, error management, and request validation.",
    link: "https://yourdomain.com/webinars/node-backend",
  },
  {
    title: "React Performance Deep Dive",
    description:
      "Understand rendering behavior, memoization, server components, and performance tools to make your React apps faster.",
    link: "https://yourdomain.com/webinars/react-performance",
  },
  {
    title: "DevOps Basics for Developers",
    description:
      "Learn CI/CD, environment management, Docker workflows, and deployment pipelines used in real production systems.",
    link: "https://yourdomain.com/webinars/devops-basics",
  },
  {
    title: "Full-Stack Project Architecture",
    description:
      "A practical session on structuring large projects, managing features, scaling codebases, and writing maintainable modules.",
    link: "https://yourdomain.com/webinars/project-architecture",
  },
  {
    title: "Mastering TypeScript for Production",
    description:
      "Understand advanced typing, interfaces, generics, utility types, and how TypeScript improves reliability in large apps.",
    link: "https://yourdomain.com/webinars/typescript",
  },
];

function UpcomingWebinars() {
  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Coding Journey</p>
            </div>
            <div className='mt-10'>
                <HoverEffect items={featuredWebinars} />
            </div>
            <div className='mt-10 text-center'>
                <Link href={'/'} className='px-5 py-2.5 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-pink-500/40 transition duration-300 hover:scale-105'>
                    View All Webinars
                </Link>
            </div>

        </div>
    </div>
  )
}

export default UpcomingWebinars