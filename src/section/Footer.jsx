import { mySocials } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 pb-10 c-space">
      
      {/* Top Divider */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-6" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400">

        {/* Left Section */}
        <div className="flex gap-3">
          <p className="hover:text-white transition-colors cursor-pointer">
            Terms & Conditions
          </p>
          <span>|</span>
          <p className="hover:text-white transition-colors cursor-pointer">
            Privacy Policy
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {mySocials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-5 h-5 opacity-80 hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-neutral-500 text-center md:text-right">
          © {new Date().getFullYear()} Deepanshi Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
