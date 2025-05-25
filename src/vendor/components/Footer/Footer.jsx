import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-white border-t shadow-md p-4 mt-auto text-center text-sm text-gray-600">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex gap-2 items-center">
          <p className="text-gray-500">Contact : +91 93275848494</p>
          <ul className="flex item-center gap-2">
            <li>
              <a target="_blank" href="https://www.instagram.com/tushar_28.7">
                <FaInstagram className="text-lg" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://x.com/ts28_7">
                <FaXTwitter className="text-lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
