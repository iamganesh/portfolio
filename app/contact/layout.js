export const metadata = {
  title: "Ganesh Baabu - Contact",
  description:
    "Connect with Ganesh Baabu for internships, collaborations, and developer opportunities.",
  openGraph: {
    title: "Ganesh Baabu - Contact",
    description:
      "Connect with Ganesh Baabu for internships, collaborations, and developer opportunities.",
    url: "https://ganeshbaabu.dev/contact",
    type: "website",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Ganesh Baabu Contact",
      },
    ],
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}