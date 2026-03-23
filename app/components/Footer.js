import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const contactLinks = [
    { name: "Email Me", dist: "mailto:kolakanuruganesh@gmail.com" },
    { name: "LinkedIn", dist: "https://www.linkedin.com/in/ganesh-kolakanuru" },
    { name: "GitHub", dist: "https://github.com/iamganesh" },
    { name: "Contact Page", dist: "/contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/iamganesh",
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/ganesh-kolakanuru",
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:kolakanuruganesh@gmail.com",
      icon: <MdEmail className="w-5 h-5" />,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-[#0a101f] py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="flex justify-center items-center flex-col">
            <h3 className="font-bold mb-6 text-center text-purple-400">
              Contact
            </h3>
            <ul className="space-y-4 text-center">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.dist}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-800">
          <p>© 2025 Kolakanuru Sai Ganesh</p>
          <div className="flex justify-center space-x-4 mt-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-gray-400 hover:text-purple-500 transition"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
