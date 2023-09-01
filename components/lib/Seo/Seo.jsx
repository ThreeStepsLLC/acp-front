const SLICE_INDEX = 1;

const seo = ({
  description,
  keywords,
  title,
  canonicalUrl = "",
  image = {},
}) => {
  const path = canonicalUrl.slice(SLICE_INDEX);

  return (
    <>
      <meta
        content={title || "Pinghome - Free uptime monitoring service"}
        itemProp="name"
      />
      <meta name="google-site-verification" content="dmf-_1sk30US8GCrfPyZIAwW9azdx0LODncH7lUIiCc" />
      <meta content={description} id="meta-description" name="description" />
      <meta
        content={
          keywords ||
          "uptime, uptime monitor, uptime robot, pinghome, uptime checker, website monitoring"
        }
        id="meta-keywords"
        name="keywords"
      />
      <meta content="index,follow" name="robots" />
      <meta content="website" property="og:type" />
      <meta
        content={title || "Pinghome - Free uptime monitoring service"}
        property="og:title"
      />
      <meta
        content={title || "Pinghome - Free uptime monitoring service"}
        property="og:site_name"
      />
      <meta
        className="meta-description"
        content={description}
        property="og:description"
      />
      <meta
        content={image?.src || "/images/content.webp"}
        property="og:image"
      />
      {image?.widthDisabled || (
        <meta content={image?.width || "2400"} property="og:image:width" />
      )}
      {image?.heightDisabled || (
        <meta content={image?.height || "1260"} property="og:image:height" />
      )}
      <meta
        content={title || "Pinghome - Free uptime monitoring service"}
        property="og:image:alt"
      />
      <link
        href="/favicons/apple-icon-57x57.png"
        rel="apple-touch-icon"
        sizes="57x57"
      />
      <link
        href="/favicons/apple-icon-60x60.png"
        rel="apple-touch-icon"
        sizes="60x60"
      />
      <link
        href="/favicons/apple-icon-72x72.png"
        rel="apple-touch-icon"
        sizes="72x72"
      />
      <link
        href="/favicons/apple-icon-76x76.png"
        rel="apple-touch-icon"
        sizes="76x76"
      />
      <link
        href="/favicons/apple-icon-114x114.png"
        rel="apple-touch-icon"
        sizes="114x114"
      />
      <link
        href="/favicons/apple-icon-120x120.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href="/favicons/apple-icon-144x144.png"
        rel="apple-touch-icon"
        sizes="144x144"
      />
      <link
        href="/favicons/apple-icon-152x152.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />
      <link
        href="/favicons/apple-icon-180x180.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicons/android-icon-192x192.png"
        rel="icon"
        sizes="192x192"
        type="image/png"
      />
      <link
        href="/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicons/favicon-96x96.png"
        rel="icon"
        sizes="96x96"
        type="image/png"
      />
      <link
        href="/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/favicons/manifest.json" rel="manifest" />
      <meta
        content="/favicons/ms-icon-144x144.png"
        name="msapplication-TileImage"
      />
      <title>{title}</title>
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}${path}`}
      />
      <meta
        content={`${process.env.NEXT_PUBLIC_BASE_URL}${path}`}
        property="og:url"
      />
    </>
  );
};

export default seo;