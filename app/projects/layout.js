export const metadata = {
  title: "Kolakanuru Sai Ganesh - Projects",
  description:
    "Explore Kolakanuru Sai Ganesh's MERN stack, secure systems, and AI/ML projects including Mini Instagram, Secure File Management System, Crop Yield Estimation, and Restaurant Table Booking.",
  openGraph: {
    title: "Kolakanuru Sai Ganesh - Projects",
    description:
      "A showcase of Kolakanuru Sai Ganesh's projects in MERN stack development, secure systems, and AI/ML applications.",
    url: "/projects",
    type: "website",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Kolakanuru Sai Ganesh Projects",
      },
    ],
  },
};

export default function ProjectsLayout({ children }) {
  return <>{children}</>;
}
