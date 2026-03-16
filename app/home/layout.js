export const metadata = {
  title: "Sai Ganesh - Home",
  description: "Showcaing my Portfolio and Blog. Explore my Projects, Journey and Contact me.",
  openGraph: {
    title: "Atharva Kote - Home",
    description: "Showcaing my Portfolio and Blog. Explore my Projects, Journey and Contact me..",
    url: "https://atharvakote.dev/Contact",
    type: "website",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Atharva Kote Contact",
      },
    ],
  },
};

export default function Home({ children }) {
  return <>{children}</>;
}
