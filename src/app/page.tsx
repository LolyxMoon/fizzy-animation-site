import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Link from "next/link";

// Generate metadata
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return (
    <>
      <SliceZone slices={home.data.slices} components={components} />

      {/* Twitter Button */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link
          href="https://x.com/FizziDegen"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            style={{ marginRight: "8px" }}
          >
            <path d="M22.162 5.656c-.793.352-1.644.59-2.538.696a4.444 4.444 0 001.95-2.453 8.886 8.886 0 01-2.81 1.073 4.426 4.426 0 00-7.538 4.034A12.56 12.56 0 013.114 4.63a4.424 4.424 0 001.37 5.904 4.397 4.397 0 01-2.005-.554v.056a4.427 4.427 0 003.55 4.34 4.427 4.427 0 01-2 .076 4.429 4.429 0 004.134 3.072A8.89 8.89 0 012 19.541a12.526 12.526 0 006.81 1.997c8.174 0 12.643-6.771 12.643-12.643 0-.193-.004-.386-.013-.577a9.031 9.031 0 002.223-2.292l.001-.002z" />
          </svg>
          Follow meeeeeeeeeee
        </Link>
      </div>
    </>
  );
}
