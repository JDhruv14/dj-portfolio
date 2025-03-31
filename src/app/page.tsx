import Head from "next/head";
import Image from "next/image";

import IndexMdx from "@/app/index.mdx";
import { baseUrl } from "@/app/sitemap";
import { TimeDisplay } from "@/components/TimeDisplay";

import AnimatedHeading from "../components/AnimatedHeading";

export const metadata = {
  title: "Dhruv Jaradi",
  description: "Dhruv's site",
  alternates: {
    canonical: `${baseUrl}`,
  },
  openGraph: {
    title: "Dhruv Jaradi",
    siteName: "Dhruv Jaradi",
    description: "Dhruv's site",
    type: "article",
    url: `${baseUrl}`,
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent("Dhruv Jaradi")}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Jaradi",
    description: "Dhruv's site",
    creator: "@theDhruvp",
    images: [`${baseUrl}/og?title=${encodeURIComponent("Dhruv Jaradi")}`],
  },
};

export default function HomePage() {
  const imgDimensions = {
    width: 128,
    height: 128,
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main className="flex flex-col text-left font-mono text-gray-900 dark:text-gray-100 dark:bg-dark">
        <AnimatedHeading />
        <TimeDisplay />
        {/* Increased margin-top to add more spacing */}
        <div className="flex flex-row mt-2">
          <section className="w-full">
            <article className="prose relative leading-snug [&>p]:my-2">
              {/* Image floats right */}
              <div className="float-right ml-3 mb-2 w-[30%] max-w-[200px] min-w-[80px]">
                <Image
                  src="/images/cropped_image (1).png"
                  alt="Dhruv"
                  width={imgDimensions.width}
                  height={imgDimensions.height}
                  className="w-full h-auto"
                />
              </div>
              <IndexMdx />
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
