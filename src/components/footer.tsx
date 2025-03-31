"use client";
import React from "react";

// X Icon
function XIcon(props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M12.601 0.769h2.453l-5.36 6.127L16 15.231h-4.937l-3.867-5.056-4.425 5.056H.316l5.733-6.553L0 0.769h5.063l3.495 4.621ZM11.74 13.763h1.359L4.324 2.16H2.865Z"
      />
    </svg>
  );
}

// LinkedIn Icon
function LinkedInIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// GitHub Icon
function GitHubIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  );
}

// Mail Icon
function MailIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function Footer() {
  const iconItems = [
    { label: "x", href: "https://x.com/jdhruv14", icon: <XIcon /> },
    { label: "linkedin", href: "https://www.linkedin.com/in/jdhruv143/", icon: <LinkedInIcon /> },
    { label: "github", href: "https://github.com/JDhruv14", icon: <GitHubIcon /> },
    { label: "mail", href: "mailto:dj1432004@email.com", icon: <MailIcon /> },
  ];

  return (
<footer className="w-full border-t-2 border-gray-300 dark:border-gray-700 border-dashed mt-3.5">
      <div className="max-w-3xl mx-auto px-0 py-2 font-mono">
        {/* Icons */}
        <div className="flex items-center text-sm">
          {iconItems.map((item, index) => (
            <span key={item.label} className="flex items-center">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 hover:rotate-10 active:animate-pulse text-gray-500 dark:text-gray-400 dark:hover:text-orange-500 hover:text-blue-500"
              >
                {React.cloneElement(item.icon, { width: 16, height: 16 })}
              </a>
              {index < iconItems.length - 1 && (
                <span className="mx-1 select-none text-[18px] text-gray-500 dark:text-gray-400">{'//'}</span>
              )}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          © {new Date().getFullYear()} Dhruv Jaradi  
          <br />
          <span className="text-xs">Built with love, coffee, and LLMs.</span>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .animate-pulse {
          animation: pulse 0.3s ease-in-out;
        }
      `}</style>
    </footer>
  );
}
