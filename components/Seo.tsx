import Head from "next/head";
import { SITE_URL } from "@/lib/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

function Seo({ title, description, path, image = "/images/og-image.jpg" }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}

export default Seo;
