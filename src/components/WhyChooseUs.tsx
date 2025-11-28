"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const courseContent = [
  {
    title: "Full-Stack Development",
    description:
      "Master both frontend and backend to build complete web applications. Learn how every layer communicates and functions together.",
    content: (
      <div className="p-4 bg-linear-to-br from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">What You’ll Learn</h3>
        <ul className="space-y-1 text-sm">
          <li>• Client & server architecture</li>
          <li>• Building full MERN stack apps</li>
          <li>• Deployment & version control</li>
        </ul>
      </div>
    ),
  },

  {
    title: "Node.js & Express",
    description:
      "Develop efficient server-side applications using Node.js and Express. Learn routing, APIs, authentication, and performance best practices.",
    content: (
      <div className="p-4 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Core Topics</h3>
        <ul className="space-y-1 text-sm">
          <li>• REST API creation</li>
          <li>• Middleware & controllers</li>
          <li>• JWT authentication</li>
        </ul>
      </div>
    ),
  },

  {
    title: "React.js Mastery",
    description:
      "Understand React deeply, from components to hooks and state management. Build fast, interactive user interfaces for modern applications.",
    content: (
      <div className="p-4 bg-linear-to-br from-blue-500 to-cyan-600 text-white rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Key Topics</h3>
        <ul className="space-y-1 text-sm">
          <li>• Hooks & custom hooks</li>
          <li>• Context API / Redux</li>
          <li>• Component architecture</li>
        </ul>
      </div>
    ),
  },

  {
    title: "MongoDB & Databases",
    description:
      "Learn how to model data, build queries, relationships, and optimize database performance using MongoDB.",
    content: (
      <div className="p-4 bg-linear-to-br from-emerald-500 to-teal-600 text-white rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Database Skills</h3>
        <ul className="space-y-1 text-sm">
          <li>• Schemas & data modeling</li>
          <li>• Aggregation pipelines</li>
          <li>• Indexing & optimization</li>
        </ul>
      </div>
    ),
  },

  {
    title: "Authentication & Security",
    description:
      "Protect your applications with proper security practices including JWT, hashing, validation, and role-based access.",
    content: (
      <div className="p-4 bg-linear-to-br from-red-500 to-orange-600 text-white rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Security Topics</h3>
        <ul className="space-y-1 text-sm">
          <li>• JWT & refresh tokens</li>
          <li>• Password hashing</li>
          <li>• Securing routes & APIs</li>
        </ul>
      </div>
    ),
  },

  {
    title: "Deployment & DevOps Basics",
    description:
      "Learn how to deploy applications on cloud platforms, manage environments, and optimize for production.",
    content: (
      <div className="p-4 bg-linear-to-br from-gray-700 to-gray-900 text-white rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Deployment Topics</h3>
        <ul className="space-y-1 text-sm">
          <li>• Deploying on Vercel / Netlify</li>
          <li>• Hosting Node.js servers</li>
          <li>• Environment variables</li>
        </ul>
      </div>
    ),
  },

  {
    title: "Projects & Portfolio",
    description:
      "Work on real-world projects that strengthen your resume and help you stand out during job applications, you will build: many projects such as full-stack dashboard app, authentication system, production-ready API etc. and more like these.",
    content: (
      <div className="p-4 bg-linear-to-br from-yellow-500 to-amber-600 text-white rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">You Will Build</h3>
        <ul className="space-y-1 text-sm">
          <li>• Full-stack dashboard app</li>
          <li>• Authentication system</li>
          <li>• Production-ready API</li>
        </ul>
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className=" w-full py-4">
        <h1 className="py-12 text-2xl md:text-4xl text-center font-bold">Why Choose Us</h1>
            <StickyScroll content={courseContent} />
        
    </div>
  )
}

export default WhyChooseUs
 
