const NextSeoConfig = {
  title: null,
  titleTemplate: "%s | KOREA CASINO",
  defaultTitle: "KOREA CASINO",
  description: "KOREA CASINO - Hệ thống casino trực tuyến",
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
      href: "/assets/images/logso.png",
    },
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: process.env.NEXTAUTH_URL,
    siteName: "KOREA CASINO",
    description: "KOREA CASINO",
    images: [
      {
        url: "/assets/images/logo33.png",
        width: 1200,
        height: 628,
      },
    ],
  },
  facebook: {
    appId: process.env.FACEBOOK_APPID,
  },
  twitter: {
    handle: "@KOREA",
    site: "@KOREA",
    cardType: "summary_large_image",
  },
};
export default NextSeoConfig;
