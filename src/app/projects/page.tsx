"use client";

import Head from "next/head";

import { Box } from "./Box";
import { projectsData } from "./data";

const metadata = {
  title: "My Projects",
  description: "// stuff I made while procastinating",
};

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main className="min-h-screen text-white px-4 py-8">
        <header className="max-w-3xl mx-auto mb-8 text-left pl-4">
          <h1
            className="mb-2 tracking-tighter text-[rgb(58,79,120)] dark:text-white"
            style={{
              fontFamily: "GeistMono, monospace",
              fontSize: "30px",
              fontStyle: "normal",
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              fontWeight: 600,
            }}
          >
            {metadata.title}
          </h1>
          <p
            className="mb-8 text-[rgb(58,79,120)] dark:text-white"
            style={{
              fontFamily:
                'GeistSans, sans-serif, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              fontSize: "16px",
              fontStyle: "normal",
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal",
              fontWeight: 400,
            }}
          >
            {metadata.description}
          </p>
        </header>

        <div className="max-w-3xl mx-auto space-y-8">
          {projectsData.map((project, index) => (
            <Box key={index}>
              <h2
                className="font-normal -mt-2 mb-2 text-left text-[rgb(59,130,246)] dark:text-orange-500"
                style={{
                  fontFamily:
                    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                {project.title}
              </h2>
              <blockquote
                className="mb-2 pl-4 border-l-2 border-gray-500 text-left text-[rgb(58,79,120)] dark:text-white"
                style={{
                  fontFamily:
                    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                {project.description}
              </blockquote>
              <p
                className="mb-2 text-left text-[rgb(58,79,120)] dark:text-white"
                style={{
                  fontFamily:
                    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  fontWeight: 600,
                }}
              >
                Tech Stack: {project.techStack}
              </p>
              <div
                className="flex items-center gap-2 mt-2"
                style={{
                  fontFamily:
                    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 dark:text-orange-500 hover:text-blue-300 dark:hover:text-orange-400"
                  >
                    Live Demo
                  </a>
                )}
                {project.liveLink && project.githubLink && (
                  <span className="text-gray-500">{'//'}</span>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 dark:text-orange-500 hover:text-blue-300 dark:hover:text-orange-400"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </Box>
          ))}
          {projectsData.length > 0 && (
            <blockquote className="pl-4 border-l-2 border-gray-500 text-left text-[rgb(58,79,120)] dark:text-white font-italic">
              <span>TODO: Add more projects here</span>
            </blockquote>
          )}
          {projectsData.length === 0 && (
            <p
              className="text-gray-500"
              style={{
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              No projects available.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
