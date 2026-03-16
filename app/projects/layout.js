export const metadata = {
  title: "Ganesh Baabu - Projects",
  description:
    "Explore Ganesh Baabu's MERN stack, secure systems, and AI/ML projects including Mini Instagram, Secure File Management System, Crop Yield Estimation, and Restaurant Table Booking.",
  openGraph: {
    title: "Ganesh Baabu - Projects",
    description:
      "A showcase of Ganesh Baabu's projects in MERN stack development, secure systems, and AI/ML applications.",
    url: "https://ganeshbaabu.dev/projects",
    type: "website",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Ganesh Baabu Projects",
      },
    ],
  },
};

export default function ProjectsLayout({ children }) {
  return <>{children}</>;
}