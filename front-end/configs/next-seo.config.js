const NextSeoConfig = {
  title: null,
  titleTemplate: "%s | SANDS CASINO",
  defaultTitle: "SANDS CASINO",
  description: "SANDS CASINO - Hệ thống casino trực tuyến",
  additionalMetaTags: [
    {
      property: "keywords",
      content: "megalott, xo so, xoso, keno, keno 1p, keno 3p, keno 5p, keno online",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/images-new/logo.png",
    },
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: process.env.NEXTAUTH_URL,
    siteName: "SANDS CASINO",
    description: "SANDS CASINO",
    images: [
      {
        url: "/assets/images-new/logo.png",
        width: 1200,
        height: 628,
      },
    ],
  },
  facebook: {
    appId: process.env.FACEBOOK_APPID,
  },
  twitter: {
    handle: "@SANDS",
    site: "@SANDS",
    cardType: "summary_large_image",
  },
};
export default NextSeoConfig;
