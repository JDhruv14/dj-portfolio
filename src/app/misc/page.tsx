"use client";

import React from 'react';

export default function TxsPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="font-semibold text-3xl mb-2 tracking-tighter">
        miscellaneous
      </h1>
      <p className="text-muted-foreground mb-8">
      {'//'} Think of this as my brain dump as I try to make sense of the world.
      </p>

      {/* Main content area */}
      <article className="prose">
        {/* Blogs Heading */}
        <h2 className="text-lg font-bold mb-4">blogs</h2>
        <p className="text-muted-foreground mb-4">
          A collection of blogs I&apos;ve written.
        </p>
        <h2 className="text-sm font-bold mt-8 mb-4">2024</h2>

        {/* List of blog posts */}
        <div className="space-y-6">
          {/* Blog Post 1 */}
          <div className="group relative w-[95%] mx-auto">
            <div className="absolute inset-0 outline-dashed outline-[0.2em] outline-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out rounded-md" />
            <div className="relative flex items-center text-sm text-muted-foreground py-2 px-2 my-2">
              <span
                className="min-w-[120px] no-underline"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Mono, monospace",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  fontWeight: 400,
                }}
              >
                09-08-2024
              </span>
              <a
                href="https://medium.com/@jdhruv14/death-the-beginning-or-the-end-dd0fa89c8f85"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 no-underline transition-colors duration-300 ease-out text-gray-500 group-hover:dark:text-orange-500 group-hover:text-blue-400"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Mono, monospace",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  fontWeight: 400,
                }}
              >
                Death: The beginning or the end?.txt
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="group relative w-[95%] mx-auto">
            <div className="absolute inset-0 outline-dashed outline-[0.2em] outline-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out rounded-md" />
            <div className="relative flex items-center text-sm text-muted-foreground py-2 px-2 my-2">
              <span
                className="min-w-[120px] no-underline"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Mono, monospace",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  fontWeight: 400,
                }}
              >
                26-05-2024
              </span>
              <a
                href="https://medium.com/@jdhruv14/perfect-days-joy-of-little-things-b3fb1e70061e"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 no-underline transition-colors duration-300 ease-out text-gray-500 group-hover:dark:text-orange-500 group-hover:text-blue-400"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Mono, monospace",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  fontWeight: 400,
                }}
              >
                &apos;Perfect Days&apos;: Joy of little things.txt
              </a>
            </div>
          </div>
        </div>

        {/* Blockquote for "Add more items" */}
        <blockquote
          className="mt-8 pl-4 border-l-4 border-gray-500 text-left text-[rgb(58,79,120)] dark:text-white"
          style={{
            fontFamily:
              "GeistSans, 'GeistSans Fallback', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
            fontSize: "16px",
            fontStyle: "normal",
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            fontWeight: 400,
          }}
        >
          TODO: Write more blogs 
        </blockquote>

        {/* Bookshelf Section */}
        <h2 className="text-lg font-bold mb-4">bookshelf</h2>
        <p className="text-muted-foreground mb-4">
          A collection of books I&apos;ve read.
        </p>

        {/* Book List with clickable items that do nothing on click */}
        <ul className="list-disc list-inside space-y-2">
          {[
            "Deepwork - Cal Newport",
            "My Gita - Devdutt Pattanaik",
            "Ikigai - Francesc Miralles & Hector Garcia",
          ].map((book) => (
            <li className="group" key={book}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="no-underline transition-colors duration-300 ease-out text-gray-500 group-hover:text-blue-400 dark:group-hover:text-orange-500"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Mono, monospace",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal",
                  fontWeight: 400,
                }}
              >
                {book}
              </a>
            </li>
          ))}
          <li className="group flex items-center gap-2 list-item">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="no-underline transition-colors duration-300 ease-out text-gray-500 group-hover:text-blue-400 dark:group-hover:text-orange-500"
              style={{
                textDecoration: "none",
                fontFamily: "DM Mono, monospace",
                fontSize: "16px",
                fontStyle: "normal",
                fontVariantCaps: "normal",
                fontVariantEastAsian: "normal",
                fontVariantLigatures: "normal",
                fontVariantNumeric: "normal",
                fontWeight: 400,
              }}
            >
              The almanack of Naval Ravikant – Eric Jogerson
            </a>
            <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              Currently Reading
            </span>
          </li>
        </ul>
        
        {/* Blockquote for "Add more items" below the book list */}
        <blockquote
          className="mt-8 pl-4 border-l-4 border-gray-500 text-left text-[rgb(58,79,120)] dark:text-white"
          style={{
            fontFamily:
              "GeistSans, 'GeistSans Fallback', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
            fontSize: "16px",
            fontStyle: "normal",
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            fontWeight: 400,
          }}
        >
          TODO: Read more books
        </blockquote>
      </article>
    </section>
  );
}
