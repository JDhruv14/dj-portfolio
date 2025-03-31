"use client";
import { Playfair_Display } from "next/font/google";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
});

export default function AnimatedHeading() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration issues.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Set cursor color based on the current theme.
  const cursorColor = resolvedTheme === "dark" ? "orange" : "blue";

  return (
    <>
      <style jsx>{`
        .Typewriter__cursor {
          font-size: 35px;
          color: ${cursorColor} !important;
        }
        @media (max-width: 640px) {
          .Typewriter__cursor {
            font-size: 30px;
          }
          .typewriter-heading {
            word-spacing: 10px;
            line-height: 1.5;
            padding-top: 10px;
            padding-bottom: 10px;
          }
        }
      `}</style>
      <div className="flex flex-col">
        <h1 className="font-manrope typewriter-heading text-[50px] sm:text-[60px] text-center">
          <Typewriter
            options={{
              strings: ["Dhruv Jaradi"],
              autoStart: true,
              loop: true,
              cursor: "|",
              delay: 110,
              deleteSpeed: 60,
            }}
          />
        </h1>
        <p
          className={`${playfair.className} text-2xl mt-2 text-right text-blue-500 dark:text-orange-500`}
          style={{ animation: 'clockBlink 2s ease-in-out infinite' }}
        >
          -Geek
        </p>
      </div>
    </>
  );
}
