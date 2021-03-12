import React from 'react';
import Head from 'next/head';
import he from 'he';

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const fallback = `${domain}/public/images/fallback.jpg`;

const SEO = props => {
  const { isBlog = false, metaDesc } = props;
  const { featuredImage, slug, title = `` } = props;
  const { opengraphImage: ogImage, opengraphTitle: ogTitle = `` } = props;
  const { twitterDescription, twitterImage, twitterTitle } = props;

  const hasFeatured = featuredImage && featuredImage.xl;
  const featuredURL = hasFeatured ? featuredImage.xl : fallback;

  const postURL = `/`;
  const url = `${domain}/${slug}`;

  const decodedOGTitle = he.decode(ogTitle);
  const decodedTitle = he.decode(title);

  const description = metaDesc ? metaDesc : ``;
  const name = ogTitle ? decodedOGTitle : decodedTitle;
  const image = ogImage?.mediaItemUrl ? ogImage.mediaItemUrl : featuredURL;

  const safeTwitterDesc = twitterDescription ? twitterDescription : description;
  const safeTwitterImage = twitterImage ? twitterImage.mediaItemUrl : image;
  const safeTwitterTitle = twitterTitle ? twitterTitle : name;

  const schemaOrgJSONLD = [
    {
      '@context': `http://schema.org`,
      '@type': `WebSite`,
      url: domain,
      name,
      alternateName: `Image to Text`,
    },
    {
      '@context': `http://schema.org`,
      '@type': `BreadcrumbList`,
      itemListElement: [
        {
          '@type': `ListItem`,
          position: 1,
          item: {
            '@id': postURL,
            name,
            image,
          },
        },
      ],
    },
    {
      '@context': `http://schema.org`,
      '@type': `BlogPosting`,
      url: domain,
      name,
      alternateName: `Image to Text`,
      headline: name,
      image: {
        '@type': `ImageObject`,
        url: image,
      },
      description: metaDesc,
    },
  ];

  return (
    <Head>
      {/* General tags */}
      <title>{name}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#de402f" />
      <meta name="theme-color" content="#de402f" />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      {/* OpenGraph tags */}
      {isBlog && <meta property="og:type" content="article" />}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:creator" content={`makeupandmane`} />
      <meta name="twitter:title" content={safeTwitterTitle} />
      <meta name="twitter:description" content={safeTwitterDesc} />
      <meta name="twitter:image" content={safeTwitterImage} />
    </Head>
  );
};

export default SEO;
