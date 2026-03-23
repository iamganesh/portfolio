export const metadata = {
  title: "Kolakanuru Sai Ganesh - Home",
  description: "Showcaing my Portfolio and Blog. Explore my Projects, Journey and Contact me.",
  openGraph: {
    title: "Kolakanuru Sai Ganesh - Home",
    description: "Kolakanuru Sai Ganesh | MERN Stack Developer | AI/ML Engineer",
    url: "/home",
    type: "website",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Kolakanuru Sai Ganesh Contact",
      },
    ],
  },
};

export default function Home({ children }) {
  return <>{children}</>;
}
