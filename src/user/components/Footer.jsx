import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Contact from "./Contact";

function Footer() {
  return (
    <footer className="bg-blackBg text-whiteBg mt-24 px-4 py-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
     
        <div className="flex flex-col items-start">
          <div className="border max-w-xs bg-mainBg rounded-xl shadow-gray-400 shadow-md p-2">
            <img src={logo} alt="logo" className="w-32 md:w-40" />
          </div>

          <ul className="text-xs font-thin mt-3">
            <li>
              <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </li>
          </ul>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <ul className="space-y-2">
            <li>
              <Link to="/terms">Terms of Use</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Contact />
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link target="_blank" to="https://www.freepik.com/">Illustrations By</Link>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <Link target="_blank" to="https://www.linkedin.com/in/tushar-soni-b0426022b/" className="flex items-center gap-2">
                <FaInstagram />
                Instagram
              </Link>
            </li>
            <li>
              <Link target="_blank" to="https://x.com/ts28_7" className="flex items-center gap-2">
                <FaXTwitter />
                Twitter
              </Link>
            </li>
            <li>
              <Link  target="_blank" to="https://www.instagram.com/tushar_28.7/" className="flex items-center gap-2">
                <FaLinkedinIn />
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
